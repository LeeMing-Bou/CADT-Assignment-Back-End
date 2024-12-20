const express = require('express');
const { createShippers, retrieveAllShippers, retrieveShipperByID, updateShipperByID, deleteShipperByID } = require('../controller/Shipper.js');
const ShipperRouter = express.Router();

ShipperRouter.post('/', createShippers);
ShipperRouter.get('/', retrieveAllShippers);
ShipperRouter.get('/:id', retrieveShipperByID);
ShipperRouter.put('/:id', updateShipperByID);
ShipperRouter.delete('/:id', deleteShipperByID);

module.exports = ShipperRouter;
