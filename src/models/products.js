const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  proName: { type: String, required: true },
  proPrice: { type: String, required: true },
  proQty: { type: String, required: true },
  proDes: {type: String},
  shipperID: [{ type: mongoose.Types.ObjectId, ref: "Shipper" }],
});

const ProductModel = mongoose.model("Product", productSchema);
module.exports = ProductModel;
