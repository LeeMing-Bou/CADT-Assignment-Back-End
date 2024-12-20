const ShipperModel = require('../models/shipper.js');
const asyncHandler = require('express-async-handler');

const retrieveAllShippers = asyncHandler(async (req, res) => {
  const retrieveData = await ShipperModel.find();
  return res.json(retrieveData);
});

const retrieveShipperByID = asyncHandler(async (req, res) => {
  const ShipperID = req.params.id;
  const retrieveDataByID = await ShipperModel.findById(ShipperID);
  if (!retrieveDataByID) {
    return res.status(400).json({
      error: 'The Shipper that you are finding is not found.',
    });
  }
  return res.json(retrieveDataByID);
})

const createShippers = asyncHandler(async (req, res) => {
  try {
    const ShipperInfo = {
      shipperName: req.body.shipperName,
      shipperPhone: req.body.shipperPhone,
      shipperIdentity: parseInt(req.body.shipperIdentity),
      shipperAddress: req.body.shipperAddress,
    };
    const ShipperData = new ShipperModel(ShipperInfo);
    const result = await ShipperData.save();
    return res.json(result);
  } catch (error) {
    throw new Error(error);
  }
})

const updateShipperByID = asyncHandler(async (req, res) => {
  const updateID = req.params.id;
  const updateShipperByID = await ShipperModel.updateOne({ _id: updateID }, req.body);
  return res.json(updateShipperByID);
})

const deleteShipperByID = asyncHandler(async (req, res) => {
  const deleteID = req.params.id;
  const deleteShipperByID = await ShipperModel.deleteOne({ _id: deleteID });
  return res.json(deleteShipperByID);
})

module.exports = {
  createShippers,
  retrieveAllShippers,
  retrieveShipperByID,
  updateShipperByID,
  deleteShipperByID,
};
