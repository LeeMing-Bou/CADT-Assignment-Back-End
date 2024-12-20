const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const { responseHandler } = require('express-intercept');
const redisClient = require('../redis/redis.js');

function logger(res, req, next) {
  console.log('Incoming Request...', req.rawHeaders[3]);
  next();
}

function handleError(error, req, res, next) {
  return res.status(500).json({
    messageError: error.message,
  });
}

const verifyToken = asyncHandler(async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'Authentication Failed!!!' });
  }

  //Request From Client Bearer is index 0 and there is a SPACE token is index 1
  //That's why we splited by SPACE and took data from index 1
  const extractToken = token.split(' ')[1];
  const decodedToken = jwt.verify(extractToken, process.env.JWT_SECRET_KEY);
  req.user = decodedToken;
  next();
});

const cacheInterceptor = (expiredTime) =>
  responseHandler()
    //Check Request Method ONLY GET
    .for((req) => req.method == 'GET')
    //Check ONLY Successful
    .if((res) => {
      const codes = [200, 201, 202, 203, 204];
      //Check Status Code Include in the Condition OR NOT
      return codes.includes(res.statusCode);
    })
    //For Setting those DATA to Redis
    .getString(async (body, req, res) => {
      const { originalUrl } = res.req;
      redisClient.set(originalUrl, body, {
        EX: expiredTime,
      });
    });

//Checking and Return DATA From Redis To Client
const cacheMiddleware = asyncHandler(async (req, res, next) => {
  const { originalUrl } = req;
  if (req.method == 'GET') {
    const data = await redisClient.get(originalUrl);
    if (data !== null) {
      return res.json(JSON.parse(data));
    }
  }
  next();
});

const invalidateInterceptor = responseHandler()
  .for((req) => {
    const methods = ['POST', 'PUT', 'PATCH', 'DELETE'];
    return methods.includes(req.method);
  })
  .if((res) => {
    const codes = [200, 201, 202, 203, 204];
    return codes.includes(res.statusCode);
  })
  .getString(async (body, req, res) => {
    // const { baseUrl } = req;
    // const keys = await redisClient.keys(`${baseUrl}*`);
    // for (let i = 0; i < keys.length; i++) {
    //   redisClient.del(keys[i]);
    // }
    const { originalUrl } = res.req;
    const keys = await redisClient.keys(`${originalUrl}*`);
    await redisClient.del(keys);
  });

module.exports = {
  logger,
  handleError,
  verifyToken,
  cacheInterceptor,
  cacheMiddleware,
  invalidateInterceptor,
};
