const express = require('express');
const { createProducts, retrieveAllProducts, retrieveProductByID, updateProductByID, deleteProductByID } = require('../controller/Products.js');
const ProductRouter = express.Router();

ProductRouter.post('/', createProducts);
ProductRouter.get('/', retrieveAllProducts);
ProductRouter.get('/:id', retrieveProductByID);
ProductRouter.put('/:id', updateProductByID);
ProductRouter.delete('/:id', deleteProductByID);

module.exports = ProductRouter;
