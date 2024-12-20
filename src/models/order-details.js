const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const OrderDetailSchema = new mongoose.Schema({
  detailNo: { type: Number },
  proOrderID: { type: String, required: true },
  proID: { type: String, required: true },
  Qty: { type: String, required: true },
});

//For Auto Increasement when Insert Into DB
OrderDetailSchema.plugin(AutoIncrement, { inc_field: 'detailNo' });

const OrderDetailModel = mongoose.model('OrderDetail', OrderDetailSchema);
module.exports = OrderDetailModel;
