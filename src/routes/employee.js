const express = require('express');
const { createEmployees, retrieveAllEmployees, retrieveEmployeeByID, updateEmployeeByID, deleteEmployeeByID } = require('../controller/Employee.js');
const EmployeeRouter = express.Router();

EmployeeRouter.post('/', createEmployees);
EmployeeRouter.get('/', retrieveAllEmployees);
EmployeeRouter.get('/:id', retrieveEmployeeByID);
EmployeeRouter.put('/:id', updateEmployeeByID);
EmployeeRouter.delete('/:id', deleteEmployeeByID);

module.exports = EmployeeRouter;
