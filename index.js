require('dotenv').config();

const express = require('express');
const dbConnection = require('./src/db/dbConnection');
const bodyParser = require('body-parser');
const app = express();

const { RedisStore } = require('rate-limit-redis');
const rateLimit = require('express-rate-limit');
const redisClient = require('./src/redis/redis.js');
const setupSwagger = require ('./src/swaggerDoc/swagger.js')


const CategoriesRouter = require('./src/routes/categories.js');
const CustomerRouter = require('./src/routes/customers.js');
const EmployeeRouter = require('./src/routes/employee.js');
const OrderDetailRouter = require('./src/routes/order-details.js');
const ProductOrderedRouter = require('./src/routes/product-ordered.js');
const ProductRouter = require('./src/routes/products.js');
const ShipperRouter = require('./src/routes/shipper.js');
const UserRouter = require('./src/routes/user.js');
const AuthRouter = require('./src/routes/auth.js');

const { verifyToken, handleError, logger, cacheInterceptor, cacheMiddleware, invalidateInterceptor } = require('./src/middleware/index.js');

dbConnection().catch((err) => {
  console.log('Connection Failed Successfully.', err);
});

redisClient.connect();

const requestLimiter = rateLimit({
  store: new RedisStore({
    sendCommand: (...args) => redisClient.sendCommand(args),
  }),

  windowMs: 15 * 60 * 1000, // 15 minutes //Thinking as MilliSecond 1Min = 60000Millisecond
  max: 50, // Limit each IP to 100 requests per windowMs
  message: { msg: 'Too many requests from this IP, please try again later.' },
});

app.use(bodyParser.json());
app.use(requestLimiter);

// redisClient.set("Testing Cache Redis", "Hello! I am just a chill guy!!", {
//   EX : 20
// })

//No Need to Apply Caches
app.use('/Auth', AuthRouter);

// app.use(cacheMiddleware);
// //Set "expiredTime" 
// app.use(cacheInterceptor(1*60));
// app.use(invalidateInterceptor);

app.use('/Categories', verifyToken, cacheMiddleware, cacheInterceptor(1*60), invalidateInterceptor , CategoriesRouter);
app.use('/Customers', cacheMiddleware, cacheInterceptor(1*60), invalidateInterceptor, CustomerRouter);
app.use('/Employees', cacheMiddleware, cacheInterceptor(1*60), invalidateInterceptor, EmployeeRouter);
app.use('/OrderDetails', cacheMiddleware, cacheInterceptor(1*60), invalidateInterceptor, OrderDetailRouter);
app.use('/ProductOrdered', cacheMiddleware, cacheInterceptor(1*60), invalidateInterceptor, ProductOrderedRouter);
app.use('/Products', cacheMiddleware, cacheInterceptor(1*60), invalidateInterceptor, ProductRouter);
app.use('/Shippers', cacheMiddleware, cacheInterceptor(1*60), invalidateInterceptor, ShipperRouter);
app.use('/Users', cacheMiddleware, cacheInterceptor(1*60), invalidateInterceptor, UserRouter);
app.use(handleError);

setupSwagger(app);

app.listen(process.env.PORT, () => {
  console.log(`THIS SERVER is running on PORT ==> http://localhost:${process.env.PORT}`);
});
