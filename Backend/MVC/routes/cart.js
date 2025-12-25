const express = require("express");
const { updateCart } = require("../controllers/cart");
const cartRouter = express.Router();

//========================

cartRouter.put("/:id", updateCart);

//========================

module.exports = cartRouter;
