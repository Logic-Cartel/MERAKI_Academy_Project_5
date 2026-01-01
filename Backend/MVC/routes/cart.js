const express = require("express");
const {
  addToCart,
  getCartWereIsDeletedFalse,
  getCartWhereIsDeletedTure,
  getCartWithProducts,
  removeFromCart,
} = require("../controllers/cart");
const authentication = require("../middlewares/authentication");
const cartRouter = express.Router();

//========================
cartRouter.post("/", authentication, addToCart);
cartRouter.get(
  "/getCartWhereIsDeletedFalse",
  authentication,
  getCartWereIsDeletedFalse
);
cartRouter.get(
  "/getCartWhereIsDeletedTure",
  authentication,
  getCartWhereIsDeletedTure
);
cartRouter.get("/with-products", authentication, getCartWithProducts);
cartRouter.delete("/:id",authentication, removeFromCart)
//========================

module.exports = cartRouter;
