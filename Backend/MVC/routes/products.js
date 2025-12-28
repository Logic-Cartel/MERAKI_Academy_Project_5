const express = require("express");
const productsRouter = express.Router();

const {
  addNewProducts,
  getProductById,
  updateProductById,
  deleteProductById,
  getAllProducts,
  getTop10Products,
} = require("../controllers/products");

productsRouter.get("/top10",getTop10Products)
productsRouter.post("/", addNewProducts);
productsRouter.get("/all", getAllProducts);
productsRouter.get("/:id", getProductById);
productsRouter.put("/:id/update", updateProductById);
productsRouter.delete("/:id", deleteProductById);

module.exports = productsRouter;
