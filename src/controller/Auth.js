const asyncHandler = require('express-async-handler');
const UserModel = require('../models/user.js');
//For Encryption Password
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const loginUser = asyncHandler(async (req, res) => {
  const { userEmail, userPass } = req.body;
  const retrieveUser = await UserModel.findOne({ userEmail: userEmail });
  if (!retrieveUser) {
    return res.status(400).json('User Not Found!');
  }

  const comparePassword = await bcrypt.compare(userPass, retrieveUser.userPass);

  if (!comparePassword) {
    return res.status(400).json(
      {error: 'Incorrect Password or Email'});
  }

  const token = await jwt.sign(
    {
      _id: retrieveUser.id,
      userPass: retrieveUser.userPass,
      userName: retrieveUser.userName,
    },
    process.env.JWT_SECRET_KEY,{expiresIn: "5m"}
  );
  return res.json({ Token: token });
});

module.exports = {loginUser}
