const express = require("express");
const router = express.Router();
const UserController = require("../controller/users");
router
  .get("/", UserController.getAllUsers)
  .get("/getuser/:token", UserController.getUser)
  .get("/getorders", UserController.getOrders)
  .post("/bookorder", UserController.Order);

exports.router = router;
