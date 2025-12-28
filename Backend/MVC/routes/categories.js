const express = require("express");
const {
  addNewCategory,
  getCategoryById,
  updateCategoryById,
  deleteCategoryById,
  getAllCategories,
} = require("../controllers/categories");
const categoriesRouter = express.Router();

//====================
categoriesRouter.post("/addnewcategory", addNewCategory);
categoriesRouter.get("/category/:id", getCategoryById);
categoriesRouter.get("/", getAllCategories);
categoriesRouter.put("/category/:id/update", updateCategoryById);
categoriesRouter.delete("/category/:id", deleteCategoryById);
//====================

module.exports = categoriesRouter;
