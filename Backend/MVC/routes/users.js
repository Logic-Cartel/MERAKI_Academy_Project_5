const express = require("express");
const usersRouter = express.Router();
const { register, login, getAllUser } = require("../controllers/users");
//===============
usersRouter.post("/register", register);
//===============
usersRouter.post("/login", login);
usersRouter.get("/", getAllUser);
module.exports = usersRouter;
