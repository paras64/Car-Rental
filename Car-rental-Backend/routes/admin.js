const express = require("express");
const router = express.Router();
const AdminController = require("../controller/admin");

router
  .get("/getdata/:token", AdminController.GetData)
  .post("/login", AdminController.AdminLogin);

exports.router = router;
