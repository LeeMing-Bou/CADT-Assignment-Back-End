const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const productOrderedSchema = new mongoose.Schema({
  proOrderedNo: {type: Number},
  proOrderDate: { type: Date, required: true, default: new Date() },
  proOrderNote: {type: String},
  empID: [{ type: mongoose.Types.ObjectId, ref: 'Employee' }],
  cusID: [{ type: mongoose.Types.ObjectId, ref: 'Customer' }],
  proID: [{ type: mongoose.Types.ObjectId, ref: 'Product' }],
});

//For Auto Increasement when Insert Into DB
productOrderedSchema.plugin(AutoIncrement, { inc_field: 'proOrderedNo' });

const ProductOrderedModel = mongoose.model('ProductOrder', productOrderedSchema);
module.exports = ProductOrderedModel;
