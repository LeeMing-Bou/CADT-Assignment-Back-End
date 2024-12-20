const ProductModel = require('../models/products.js');
const asyncHandler = require('express-async-handler');

const retrieveAllProducts = asyncHandler(async (req, res) => {
  const retrieveData = await ProductModel.find();
  return res.json(retrieveData);
});

const retrieveProductByID = asyncHandler(async (req, res) => {
  const ProductID = req.params.id;
  const retrieveDataByID = await ProductModel.findById(ProductID);
  if (!retrieveDataByID) {
    return res.status(400).json({
      error: 'The Product that you are finding is not found.',
    });
  }
  return res.json(retrieveDataByID);
})

const createProducts = asyncHandler(async (req, res) => {
  try {
    const ProductInfo = {
      proName: req.body.proName,
      proPrice: req.body.proPrice,
      proQty: req.body.proQty,
      proDes: req.body.proDes,
    };
    const ProductData = new ProductModel(ProductInfo);
    const result = await ProductData.save();
    return res.json(result);
  } catch (error) {
    throw new Error(error)
  }
})

const updateProductByID = asyncHandler(async (req, res) => {
  const updateID = req.params.id;
  const updateProductByID = await ProductModel.updateOne({ _id: updateID }, req.body);
  return res.json(updateProductByID);
})

const deleteProductByID = asyncHandler(async (req, res) => {
  const deleteID = req.params.id;
  const deleteProductByID = await ProductModel.deleteOne({ _id: deleteID });
  return res.json(deleteProductByID);
})

module.exports = {
  createProducts,
  retrieveAllProducts,
  retrieveProductByID,
  updateProductByID,
  deleteProductByID,
};
