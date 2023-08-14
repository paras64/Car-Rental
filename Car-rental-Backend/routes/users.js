const express = require("express");
const router = express.Router();
const UserController = require("../controller/users");
router
  .get("/getorders", UserController.getOrders)
  .post("/bookorder", UserController.Order);

exports.router = router;
