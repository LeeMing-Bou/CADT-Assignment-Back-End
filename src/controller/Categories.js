const CategoriesModel = require('../models/categories.js');
const asyncHandler = require('express-async-handler');
// const redisClient = require('../redis/redis.js');

const retrieveAllCategories = asyncHandler(async (req, res) => {
  //No Using Redis Cache logic
  const retrieveData = await CategoriesModel.find();
  return res.json(retrieveData);

});

const retrieveCategoriesByID = asyncHandler(async (req, res) => {
  const catID = req.params.id;
  const retrieveDataByID = await CategoriesModel.findById(catID);
  console.log('Categories' + JSON.stringify(retrieveDataByID));
  if (!retrieveDataByID) {
    return res.status(400).json({
      error: 'The categories that you are finding is not found.',
    });
  }
  return res.json(retrieveDataByID);
});

const createCategories = asyncHandler(async (req, res) => {
  try {
    const categoriesInfo = {
      catName: req.body.catName,
      catDes: req.body.catDes,
    };
    const CategoriesData = new CategoriesModel(categoriesInfo);
    const result = await CategoriesData.save();

    //Invalidate/Delete Cache on Redis When there is sth Update or Create New
    // const { originalUrl } = res.req;
    // const keys = await redisClient.keys(`${originalUrl}*`);
    // redisClient.del(keys);

    return res.json(result);
  } catch (error) {
    console.log(error);
    next(Error(error.errormsg));
  }
});

const upDateCategoiesByID = asyncHandler(async (req, res) => {
  const updateID = req.params.id;
  const updateData = {
    catName: req.body.catName,
    catDes: req.body.catDes,
  };
  console.log(updateID);
  const upDateCategoiesByID = await CategoriesModel.updateOne({ _id: updateID }, updateData);
  console.log('UpdateDATA' + JSON.stringify(upDateCategoiesByID));
  return res.json(upDateCategoiesByID);
});

const deleteCategoriesByID = asyncHandler(async (req, res) => {
  const deleteID = req.params.id;
  const deleteCategoriesByID = await CategoriesModel.deleteOne({ _id: deleteID });
  return res.json(deleteCategoriesByID);
})

module.exports = {
  createCategories,
  retrieveAllCategories,
  retrieveCategoriesByID,
  upDateCategoiesByID,
  deleteCategoriesByID,
};
