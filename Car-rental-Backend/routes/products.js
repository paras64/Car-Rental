const express = require("express");
const router = express.Router();
const ProductController = require("../controller/products.js");

router
  .get("/", ProductController.getAllProducts)
  .post("/addproduct", ProductController.createProduct);

exports.router = router;
