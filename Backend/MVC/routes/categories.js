const express = require("express");
const {
  addNewCategory,
  getCategoryById,
  updateCategoryById,
  deleteCategoryById,
  getAllCategories,
} = require("../controllers/categories");
const authentication = require("../middlewares/authentication");
const authorization = require("../middlewares/authorization")
const categoriesRouter = express.Router();

//====================
categoriesRouter.post("/add", authentication, authorization(1), addNewCategory);
categoriesRouter.get("/category/:id", getCategoryById);
categoriesRouter.get("/", getAllCategories);
categoriesRouter.put("/category/:id/update", updateCategoryById);
categoriesRouter.delete("/category/:id", deleteCategoryById);
//====================

module.exports = categoriesRouter;
