const express = require("express");
const {
  addToCart,
  getCart,
  removeFromCart,
  getCartWhereIsDeletedTrue,
} = require("../controllers/cart");
const authentication = require("../middlewares/authentication");
const cartRouter = express.Router();

//========================
cartRouter.post("/", authentication, addToCart);
cartRouter.get("/", authentication, getCart);
cartRouter.delete("/:productId", authentication, removeFromCart);
cartRouter.get(
  "/getCartWhereIsDeletedTrue",
  authentication,
  getCartWhereIsDeletedTrue
);

//========================

module.exports = cartRouter;
