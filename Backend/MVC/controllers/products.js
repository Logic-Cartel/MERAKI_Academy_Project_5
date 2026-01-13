const { pool } = require("../models/db");

const addNewProducts = (req, res) => {
  const { imgsrc, title, description, price, rate, categories_id, store_id } =
    req.body;

  const query = `
    INSERT INTO products (imgsrc, title, description, price, rate, categories_id,store_id)
    VALUES ($1, $2, $3, $4, $5, $6,$7)
    RETURNING *;
  `;

  const values = [
    imgsrc,
    title,
    description,
    price,
    rate,
    categories_id,
    store_id,
  ];

  pool
    .query(query, values)
    .then((result) => {
      res.status(201).json({
        success: true,
        message: "Product added successfully",
        product: result.rows[0],
      });
    })
    .catch((err) => {
      console.log(err);

      res.status(500).json({
        success: false,
        message: "Server error",
        err: err.message,
      });
    });
};

const getAllProducts = (req, res) => {
  pool
    .query(
      `SELECT *
    FROM products
  `
    )
    .then((result) => {
      res.status(200).json({
        success: true,
        products: result.rows,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "Server error",
        err: err.message,
      });
    });
};

const getProductById = (req, res) => {
  const productId = req.params.id;

  const query = `SELECT 
    p.id, 
    p.title, 
    p.description, 
    p.price, 
    p.rate, 
    p.imgsrc,
    p.store_id,
    c.name AS category_name,
    c.id AS category_id
    FROM products p
    INNER JOIN categories c ON p.categories_id = c.id
    WHERE p.id = $1;
  `;

  pool
    .query(query, [productId])
    .then((result) => {
      if (result.rows.length === 0) {
        return res.status(404).json({
          success: false,
          message: "Product not found",
        });
      }

      res.status(200).json({
        success: true,
        product: result.rows[0],
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "Server error",
        err: err.message,
      });
    });
};

const updateProductById = async (req, res) => {
  const { id } = req.params;
  const { imgsrc, title, description, price, rate, categories_id } = req.body;

  try {
    const result = await pool.query(
      `UPDATE products 
            SET title = $1, description=$2, imgsrc = $3 , price = $4, rate = $5, categories_id = $6
            WHERE id = $7
            RETURNING *`,
      [title, description, imgsrc, price, rate, categories_id, id]
    );
    res.status(200).json({
      success: true,
      message: "Updating Done Successfully",
      result: result.rows,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "server error",
    });
  }
};

const deleteProductById = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query(`DELETE FROM products WHERE id=$1`, [id]);
    res.status(200).json({
      success: true,
      message: "product deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "server error",
    });
  }
};

const getTop10Products = async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT 
        products.*,
        COALESCE(SUM(cart_products.quantity), 0) as total_sold
      FROM products
      LEFT JOIN cart_products ON products.id = cart_products.product
      LEFT JOIN cart ON cart_products.cart = cart.id 
        AND cart.is_deleted = true 
        AND cart.done_at IS NOT NULL
      GROUP BY products.id
      ORDER BY total_sold DESC
      LIMIT 10
    `);
    res.status(200).json({ success: true, result: result.rows });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

module.exports = {
  addNewProducts,
  getProductById,
  updateProductById,
  deleteProductById,
  getAllProducts,
  getTop10Products,
};
