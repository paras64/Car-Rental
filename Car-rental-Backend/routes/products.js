const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const path = require("path");
const fs = require("fs");

const publicKey = fs.readFileSync(
  path.join(__dirname, "../mypublic.pem"),
  "utf-8"
);
const ProductController = require("../controller/products.js");
const auth = (req, res, next) => {
  try {
    const { adminData } = req.body;
    // console.log(adminData);
    const decode = jwt.verify(adminData.token, publicKey, {
      algorithms: "RS256",
    });
    if (decode) {
      next();
    } else {
      console.log("Invalid token");
      res.status(401).json({ message: "Unauthorized" });
    }
  } catch (err) {
    console.error("JWT verification error:", err);
    res.status(401).json({ message: "Unauthorized" });
  }
};

router
  .get("/", ProductController.getAllProducts)
  .post("/addproduct", auth, ProductController.createProduct);

exports.router = router;
