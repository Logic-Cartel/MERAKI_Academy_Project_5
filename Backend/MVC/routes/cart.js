const express = require("express");
const { updateCart, getDeletedCart } = require("../controllers/cart");
const cartRouter = express.Router();

//========================

cartRouter.put("/:id", updateCart);
cartRouter.get("/deleted", getDeletedCart);

//========================

module.exports = cartRouter;
