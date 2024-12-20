const OrderDetailModel = require('../models/order-details.js');
const asyncHandler = require('express-async-handler');

const retrieveAllOrderDetails = asyncHandler(async (req, res) => {
  const retrieveData = await OrderDetailModel.find();
  return res.json(retrieveData);
});

const retrieveOrderDetailByID = asyncHandler(async (req, res) => {
  const orderDetailID = req.params.id;
  const retrieveDataByID = await OrderDetailModel.findById(orderDetailID);
  if (!retrieveDataByID) {
    return res.status(400).json({
      error: 'The OrderDetail that you are finding is not found.',
    });
  }
  return res.json(retrieveDataByID);
});

const createOrderDetails = asyncHandler(async (req, res) => {
  try {
    const OrderDetailInfo = {
      detailNo: req.body.detailNo,
      proOrderID: req.body.proOrderID,
      proID: req.body.proID,
      Qty: req.body.Qty,
    };
    const OrderDetailData = new OrderDetailModel(OrderDetailInfo);
    const result = await OrderDetailData.save();
    return res.json(result);
  } catch (error) {
    throw new Error(error);
  }
});

const updateOrderDetailByID = asyncHandler(async (req, res) => {
  const updateID = req.params.id;
  const updateOrderDetailByID = await OrderDetailModel.updateOne({ _id: updateID }, req.body);
  return res.json(updateOrderDetailByID);
})

const deleteOrderDetailByID = asyncHandler(async (req, res) => {
  const deleteID = req.params.id;
  const deleteOrderDetailByID = await OrderDetailModel.deleteOne({ _id: deleteID });
  return res.json(deleteOrderDetailByID);
})

module.exports = {
  createOrderDetails,
  retrieveAllOrderDetails,
  retrieveOrderDetailByID,
  updateOrderDetailByID,
  deleteOrderDetailByID,
};
