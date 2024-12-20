const express = require('express');
const { loginUser } = require('../controller/Auth.js');
const AuthRouter = express.Router();

AuthRouter.post('/loginUser', loginUser);

module.exports = AuthRouter;
