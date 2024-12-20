const express = require('express');
const { createUsers, retrieveAllUsers, retrieveUserByID, updateUserByID, deleteUserByID } = require('../controller/User.js');
const UserRouter = express.Router();

UserRouter.post('/', createUsers);
UserRouter.get('/', retrieveAllUsers);
UserRouter.get('/:id', retrieveUserByID);
UserRouter.put('/:id', updateUserByID);
UserRouter.delete('/:id', deleteUserByID);

module.exports = UserRouter;
