const { pool } = require("../models/db");

const addToCart = async (req, res) => {
  const userId = req.token.user_id;
  const { products_id } = req.body;

  try {
    const check = await pool.query(
      `
      SELECT * FROM cart
      WHERE users_id = $1 AND products_id = $2
      `,
      [userId, products_id]
    );

    if (check.rows.length > 0) {
      const updated = await pool.query(
        `
        UPDATE cart
        SET is_deleted = false
        WHERE users_id = $1 AND products_id = $2
        RETURNING *
        `,
        [userId, products_id]
      );

      return res.status(200).json({
        success: true,
        message: "Product restored to cart",
        item: updated.rows[0],
      });
    }

    const inserted = await pool.query(
      `
      INSERT INTO cart (users_id, products_id)
      VALUES ($1, $2)
      RETURNING *
      `,
      [userId, products_id]
    );

    res.status(201).json({
      success: true,
      message: "Product added to cart",
      item: inserted.rows[0],
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};
const removeFromCart = async (req, res) => {
  const userId = req.token.user_id;
  const { productId } = req.params;

  try {
    const result = await pool.query(
      `
      UPDATE cart
      SET is_deleted = true
      WHERE users_id = $1 AND products_id = $2
      RETURNING *
      `,
      [userId, productId]
    );

    res.json({
      success: true,
      message: "Removed from cart",
      item: result.rows[0],
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};
const getCart = async (req, res) => {
  const userId = req.token.user_id;

  try {
    const result = await pool.query(
      `
      SELECT c.*, p.title, p.price, p.imgsrc
      FROM cart c
      JOIN products p ON c.products_id = p.id
      WHERE c.users_id = $1 AND c.is_deleted = false
      `,
      [userId]
    );

    res.json({
      success: true,
      items: result.rows,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};

module.exports = {
  addToCart,
  removeFromCart,
  getCart,
};
