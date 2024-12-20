const UserModel = require('../models/user.js');
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');
const _ = require('lodash');

const retrieveAllUsers = asyncHandler(async (req, res) => {
  const retrieveData = await UserModel.find();
  return res.json(retrieveData);
});

const retrieveUserByID = asyncHandler(async (req, res) => {
  const UserID = req.params.id;
  const retrieveDataByID = await UserModel.findById(UserID);
  if (!retrieveDataByID) {
    return res.status(400).json({
      error: 'The User that you are finding is not found.',
    });
  }
  return res.json(retrieveDataByID);
});

//Create User or Sign Up
//If we use asyncHandler, We CANNOT USE try catch throw. Bec asyncHandler will handle it.
const createUsers = asyncHandler(async (req, res, next) => {
  try {
    const UserInfo = {
      userName: req.body.userName,
      userPass: req.body.userPass,
      userEmail: req.body.userEmail,
      userRegisterDate: req.body.userRegisterDate,
      userRole: req.body.userRole,
      userProfile: req.body.userProfile,
    };

    //Encryption Password
    const encryptionUserPass = bcrypt.hashSync(UserInfo.userPass, 10);
    //Insert Back to DB after Encryption
    UserInfo.userPass = encryptionUserPass;

    const UserData = new UserModel(UserInfo);
    const result = await UserData.save();
    //     console.log('Result' + JSON.stringify(result));
    //     const deleteResField = _.omit(result,['userPass']);
    // console.log('Result' + JSON.stringify(deleteResField));
    return res.json(result);
  } catch (error) {
    throw new Error(error);
  }
});

const updateUserByID = asyncHandler(async (req, res) => {
  const updateID = req.params.id;

  try {
    //Retrieve to check Before Updating Data
    const retrieveDataByID = await UserModel.findById(updateID);
    if (!retrieveDataByID) {
      return res.status(400).json({
        error: 'Data Not Found!!!',
      });
    }

    const updateUserByID = await UserModel.updateOne({ _id: updateID }, req.body);
    return res.json(updateUserByID);
  } catch (error) {
    throw new Error(error);
  }
});

const deleteUserByID = asyncHandler(async (req, res) => {
  const deleteID = req.params.id;
  const deleteUserByID = await UserModel.deleteOne({ _id: deleteID });
  return res.json(deleteUserByID);
})

module.exports = {
  createUsers,
  retrieveAllUsers,
  retrieveUserByID,
  updateUserByID,
  deleteUserByID,
};
