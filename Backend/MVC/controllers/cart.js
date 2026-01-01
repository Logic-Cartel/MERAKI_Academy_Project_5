const { pool } = require("../models/db");

const addToCart = (req, res) => {
  const { products_id, cart_id, quantity } = req.body;
    console.log("BODY:", req.body);

  pool
    .query(
      `
      INSERT INTO cart_products (cart, product,
      quantity)
      VALUES ($1, $2,$3)
      RETURNING *
      `,
      [cart_id, products_id, quantity]
    )
    .then((result) => {
      res.status(201).json({
        success: true,
        message: "Product added to cart",
        item: result.rows[0],
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        error: err.message,
      });
    });
};

const getCartWereIsDeletedFalse = (req, res) => {
  const userId = req.token.user_id;

  pool
    .query(
      `
      SELECT *
      FROM cart
      WHERE is_deleted = false
      AND users_id = $1
      `,
      [userId]
    )
    .then((result) => {
      res.json({
        success: true,
        items: result.rows,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        error: err.message,
      });
    });
};

module.exports = {
  addToCart,
  getCartWereIsDeletedFalse,
};
