const EmployeeModel = require('../models/employee.js');
const asyncHandler = require('express-async-handler');

const retrieveAllEmployees = asyncHandler(async (req, res) => {
  const retrieveData = await EmployeeModel.find();
  return res.json(retrieveData);
});

async function retrieveEmployeeByID(req, res) {
  const empID = req.params.id;
  const retrieveDataByID = await EmployeeModel.findById(empID);
  if (!retrieveDataByID) {
    return res.status(400).json({
      error: 'The employee that you are finding is not found.',
    });
  }
  return res.json(retrieveDataByID);
}

const createEmployees = asyncHandler(async (req, res) => {
  try {
    const employeeInfo = {
      empFirstName: req.body.empFirstName,
      empLastName: req.body.empLastName,
      // empName: empFirstName + ' ' + empLastName,
      empGender: req.body.empGender,
      empEmail: req.body.empEmail,
      empPhone: req.body.empPhone,
      empPosition: req.body.empPosition,
      empAddress: req.body.empAddress,
      empBD: req.body.empBD,
      empStartDate: req.body.empStartDate,
      empStatus: req.body.empStatus,
    };
    const EmployeeData = new EmployeeModel(employeeInfo);
    const result = await EmployeeData.save();
    return res.json(result);
  } catch (error) {
    throw new Error(error);
  }
})

const updateEmployeeByID = asyncHandler(async (req, res) => {
  const updateID = req.params.id;
  const updateEmployeeByID = await EmployeeModel.updateOne({ _id: updateID }, req.body);
  return res.json(updateEmployeeByID);
})

const deleteEmployeeByID = asyncHandler(async (req, res) => {
  const deleteID = req.params.id;
  const deleteEmployeeByID = await EmployeeModel.deleteOne({ _id: deleteID });
  return res.json(deleteEmployeeByID);
})

module.exports = {
  createEmployees,
  retrieveAllEmployees,
  retrieveEmployeeByID,
  updateEmployeeByID,
  deleteEmployeeByID,
};
