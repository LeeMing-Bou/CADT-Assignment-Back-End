const CustomerModel = require('../models/customers.js');
const asyncHandler = require('express-async-handler');

const retrieveAllCustomers = asyncHandler(async (req, res) => {
  const retrieveData = await CustomerModel.find();
  return res.json(retrieveData);
});

const retrieveCustomerByID = asyncHandler(async (req, res) => {
  const cusID = req.params.id;
  const retrieveDataByID = await CustomerModel.findById(cusID);

  if (!retrieveDataByID) {
    return res.status(400).json({
      error: 'The customer that you are finding is not found.',
    });
  }
  return res.json(retrieveDataByID);
})

const createCustomers = asyncHandler(async (req, res) => {
  try {
    const customerInfo = {
      cusName: req.body.cusName,
      cusPhone: req.body.cusPhone,
      cusEmail: req.body.cusEmail,
      cusAddress: req.body.cusAddress,
    };
    const CustomerData = new CustomerModel(customerInfo);
    const result = await CustomerData.save();
    return res.json(result);
  } catch (error) {
    throw new Erro(error);
  }
})

const updateCustomerByID = asyncHandler(async (req, res) => {
  const updateID = req.params.id;
  const updateCustomerByID = await CustomerModel.updateOne({ _id: updateID }, req.body);
  return res.json(updateCustomerByID);
})

const deleteCustomerByID = asyncHandler(async (req, res) => {
  const deleteID = req.params.id;
  const deleteCategoriesByID = await CustomerModel.deleteOne({ _id: deleteID });
  return res.json(deleteCategoriesByID);
})

module.exports = {
  createCustomers,
  retrieveAllCustomers,
  retrieveCustomerByID,
  updateCustomerByID,
  deleteCustomerByID,
};
