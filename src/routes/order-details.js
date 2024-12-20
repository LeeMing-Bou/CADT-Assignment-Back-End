const express = require('express');
const { createOrderDetails, retrieveAllOrderDetails, retrieveOrderDetailByID, updateOrderDetailByID, deleteOrderDetailByID } = require('../controller/Order-details.js');
const OrderDetailRouter = express.Router();

OrderDetailRouter.post('/', createOrderDetails);
OrderDetailRouter.get('/', retrieveAllOrderDetails);
OrderDetailRouter.get('/:id', retrieveOrderDetailByID);
OrderDetailRouter.put('/:id', updateOrderDetailByID);
OrderDetailRouter.delete('/:id', deleteOrderDetailByID);

module.exports = OrderDetailRouter;
