const express = require('express');
const { createProductOrdered, retrieveAllProductOrdered, retrieveProductOrderedByID, updateProductOrderedByID, deleteProductOrderedByID } = require('../controller/Product-ordered.js');
const ProductOrderedRouter = express.Router();

ProductOrderedRouter.post('/', createProductOrdered);
ProductOrderedRouter.get('/', retrieveAllProductOrdered);
ProductOrderedRouter.get('/:id', retrieveProductOrderedByID);
ProductOrderedRouter.put('/:id', updateProductOrderedByID);
ProductOrderedRouter.delete('/:id', deleteProductOrderedByID);

module.exports = ProductOrderedRouter;
