const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
  cusName: { type: String, required: true },
  cusPhone: { type: String, required: true },
  cusEmail: { type: String },
  cusAddress: { type: String, required: true },
});
const CustomerModel = mongoose.model("Customer", CustomerSchema);
module.exports = CustomerModel;
