const express = require("express");
const cors = require("cors");
const axios = require("axios"); 
require("dotenv").config();
const db = require("./MVC/models/db");
const cartRouter = require("./MVC/routes/cart");
const usersRouter = require("./MVC/routes/users");
const categoriesRouter = require("./MVC/routes/categories");
const productsRouter = require("./MVC/routes/products");
const storesRouter = require("./MVC/routes/stores");

const app = express();
const PORT = process.env.PORT || 5000; 

app.use(cors());
app.use(express.json());


app.get("/ping", (req, res) => {
  res.status(200).json("I am awake!");
});

const keepAlive = () => {

  const myUrl = " http://localhost:5000"; 
  
  setInterval(async () => {
    try {
      await axios.get(myUrl);
      console.log("Self-ping successful: Server is keeping itself awake.");
    } catch (err) {
      console.log("Self-ping failed: " + err.message);
    }
  }, 600000);
};


process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});


app.use("/users", usersRouter);
app.use("/categories", categoriesRouter);
app.use("/cart", cartRouter);
app.use("/products", productsRouter);
app.use("/stores", storesRouter);

app.use((req, res) => res.status(404).json("NO content at this path"));

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
 
  keepAlive();
});
