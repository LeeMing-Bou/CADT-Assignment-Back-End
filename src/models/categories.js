const mongoose = require('mongoose');

const CategoriesSchema = new mongoose.Schema({
  catName: { type: String },
  catDes: { type: String },
});

const CategoriesModel = mongoose.model('Categories', CategoriesSchema);
module.exports = CategoriesModel;
