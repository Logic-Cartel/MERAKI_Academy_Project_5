const { pool } = require("../models/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
//====================== REGISTER =====================
const register = (req, res) => {
  const {
    firstName,
    lastName,
    age,
    country,
    phoneNumber,
    date_of_birthday,
    email,
    password,
  } = req.body;

  bcrypt
    .hash(password, 10)
    .then((hashedPassword) => {
      return pool.query(
        `INSERT INTO users (
          firstName,
          lastName,
          age,
          country,
          phoneNumber,
          date_of_birthday,
          email,
          password
        ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)
        RETURNING *`,
        [
          firstName,
          lastName,
          age,
          country,
          phoneNumber,
          date_of_birthday,
          email,
          hashedPassword,
        ]
      );
    })
    .then((result) => {
      res.status(201).json({
        success: true,
        message: "User created successfully",
        user: result.rows[0],
      });
    })
    .catch((err) => {
      if (err.code === "23505") {
        return res.status(409).json({
          success: false,
          message: "The email already exists",
        });
      }

      res.status(500).json({
        success: false,
        message: "Server Error",
        err: err.message,
      });
    });
};
//================login================
const login = (req, res) => {
  const { email, password } = req.body;
  pool
    .query(`SELECT * FROM users WHERE email=$1`, [email])
    .then((result) => {
      if (result.rows.length === 0) {
        res.status(403).json({
          success: false,
          massage:
            "The email doesn’t exist or the password you’ve entered is incorrect",
        });
      }
      const user = result.rows[0];
      bcrypt.compare(password, user.password).then((ismatch) => {
        if (!ismatch) {
          return res.status(403).json({
            success: false,
            massage:
              "The email doesn’t exist or the password you’ve entered is incorrect",
          });
        }
        const payload = {
          user_id: user.id,
          user_first: user.firstName,
          country: user.country,
          role: user.role_id,
         
        };
        const token = jwt.sign(payload, process.env.SECRET, {
          expiresIn: "2h",
        });
        res.status(200).json({
          success: true,
          massage: "Valid login credentials",
          token: token,
          userId: user.id,
        });
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        massage: "Server Error",
        err: err.message,
      });
    });
};
module.exports = { register, login };
