const express = require("express");
const {
  createCategories,
  retrieveAllCategories,
  retrieveCategoriesByID,
  upDateCategoiesByID,
  deleteCategoriesByID,
} = require("../controller/Categories.js");
const CategoriesRouter = express.Router();

CategoriesRouter.post("/", createCategories);
CategoriesRouter.get("/", retrieveAllCategories);
CategoriesRouter.get("/:id", retrieveCategoriesByID);
CategoriesRouter.put("/:id", upDateCategoiesByID);
CategoriesRouter.delete("/:id", deleteCategoriesByID);

module.exports = CategoriesRouter;
