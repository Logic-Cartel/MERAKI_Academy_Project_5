const express = require("express");
const {
  addNewStore,
  getStoreById,
  updateStoreById,
  deleteStoreById,
  getAllStores,
} = require("../controllers/stores");
const storesRouter = express.Router();

//===============
storesRouter.get("/all",getAllStores)
storesRouter.post("/addnewstore", addNewStore);
storesRouter.get("/:id", getStoreById);
storesRouter.put("/:id/update", updateStoreById);
storesRouter.delete("/:id", deleteStoreById);
//===============

module.exports = storesRouter;
