const mongoose = require ("mongoose");

const EmployeeSchema = new mongoose.Schema({
  empFirstName: { type: String, required: true },
  empLastName: { type: String, required: true },
  empName: { type: String },
  empGender: { type: String },
  empEmail: { type: String, required: true, unique: true },
  empPhone: { type: String },
  empPosition: { type: String },
  empAddresss: { type: String },
  empBD: { type: String },
  empStartDate: { type: Date, required: true, default: new Date() },
  empStatus: { type: String },
});

const EmployeeModel = mongoose.model('Employee', EmployeeSchema);
module.exports = EmployeeModel;
