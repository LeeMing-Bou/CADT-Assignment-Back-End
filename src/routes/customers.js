const express = require('express');
const { createCustomers, retrieveAllCustomers, retrieveCustomerByID, updateCustomerByID, deleteCustomerByID } = require('../controller/Customers.js');
const CustomerRouter = express.Router();

CustomerRouter.post('/', createCustomers);
CustomerRouter.get('/', retrieveAllCustomers);
CustomerRouter.get('/:id', retrieveCustomerByID);
CustomerRouter.put('/:id', updateCustomerByID);
CustomerRouter.delete('/:id', deleteCustomerByID);

module.exports = CustomerRouter;
