const express = require("express");
const router = express.Router();
const UserController = require("../controller/users");
router.post("/order", UserController.Order);

exports.router = router;
