const mongoose = require("mongoose");

const shipperSchema = new mongoose.Schema({
  shipperName: { type: String, required: true },
  shipperPhone: { type: String, required: true },
  shipperIdentity: { type: String, required: true },
  shipperAddress: { type: String, required: true },
});

const ShipperModel = mongoose.model("Shipper", shipperSchema);
module.exports = ShipperModel;
