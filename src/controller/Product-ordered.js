const ProductOrderedModel = require('../models/product-ordered.js');
const asyncHandler = require('express-async-handler');

const retrieveAllProductOrdered = asyncHandler(async (req, res) => {
  const retrieveData = await ProductOrderedModel.find();
  return res.json(retrieveData);
});

const retrieveProductOrderedByID = asyncHandler(async (req, res) => {
  const ProductOrderedID = req.params.id;
  const retrieveDataByID = await ProductOrderedModel.findById(ProductOrderedID);
  if (!retrieveDataByID) {
    return res.status(400).json({
      error: 'The ProductOrdered that you are finding is not found.',
    });
  }
  return res.json(retrieveDataByID);
})

const createProductOrdered = asyncHandler(async (req, res) => {
  try {
    // const ProductOrderedInfo = {
    // };
    const ProductOrderedData = new ProductOrderedModel();
    const result = await ProductOrderedData.save();
    return res.json(result);
  } catch (error) {
      throw new Error(error);
  }
})

const updateProductOrderedByID = asyncHandler(async (req, res) => {
  const updateID = req.params.id;
  const updateProductOrderedByID = await ProductOrderedModel.updateOne({ _id: updateID }, req.body);
  return res.json(updateProductOrderedByID);
})

const deleteProductOrderedByID = asyncHandler(async (req, res) => {
  const deleteID = req.params.id;
  const deleteProductOrderedByID = await ProductOrderedModel.deleteOne({ _id: deleteID });
  return res.json(deleteProductOrderedByID);
})

module.exports = {
  createProductOrdered,
  retrieveAllProductOrdered,
  retrieveProductOrderedByID,
  updateProductOrderedByID,
  deleteProductOrderedByID,
};
