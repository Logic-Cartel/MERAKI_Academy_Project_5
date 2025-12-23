const express = require("express")
const { addNewCategory, getCategoryById } = require("../controllers/categories")
const categoriesRouter = express.Router()

//====================
categoriesRouter.post("/addnewcategory", addNewCategory)
categoriesRouter.get("/category/:id", getCategoryById)
//====================

module.exports = categoriesRouter