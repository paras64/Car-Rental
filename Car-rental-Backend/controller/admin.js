const model = require("../model/admin");
const AdminModel = model.AdminModel;
const jwt = require("jsonwebtoken");
const path = require("path");
const fs = require("fs");
const bcrypt = require("bcrypt");

const privateKey = fs.readFileSync(
  path.join(__dirname, "../myprivate.pem"),
  "utf-8"
);

exports.AdminLogin = async (req, res) => {
  try {
    const doc = await AdminModel.findOne({ email: req.body.email });
    if (!doc) {
      res
        .status(401)
        .json({ message: "User not Found, Please check the details" });
      return;
    }
    const isAuth = bcrypt.compareSync(req.body.password, doc.password);
    if (!isAuth) {
      res.status(401).json({ message: "Incorrect Password" });
      return;
    }
    const token = jwt.sign(
      {
        email: req.body.email,
        password: req.body.password,
      },
      privateKey,
      {
        algorithm: "RS256",
        expiresIn: "1h",
      }
    );
    doc.token = token;
    doc
      .save()
      .then((response) => {
        res.status(200).json({
          message: "Checking details...",
          data: response,
        });
      })
      .catch((err) => {
        res.status(400).json({ message: "Invalid Password", err: err });
      });
  } catch (err) {
    res.status(500).json({ message: "bad request", err: err });
  }
};

// exports.AdminRegister = async (req, res) => {
//   const doc = await AdminModel.findOne({ email: req.body.email });
//   if (doc) {
//     console.log(doc);
//     res
//       .status(401)
//       .json({ message: "Admin User already exists, Please login" });
//     return;
//   }
//   const admin = new AdminModel({
//     firstname: req.body.firstname,
//     lastname: req.body.lastname,
//     email: req.body.email,
//     password: req.body.password,
//   });
//   const token = jwt.sign(
//     {
//       email: req.body.email,
//       password: req.body.password,
//     },
//     privateKey,
//     {
//       algorithm: "RS256",
//       expiresIn: "1800",
//     }
//   );
//   const hash = bcrypt.hashSync(req.body.password, 10);
//   admin.password = hash;
//   admin.token = token;
//   admin
//     .save()
//     .then((data) => {
//       res.status(201).json({ message: "Admin has been created" });
//     })
//     .catch((err) => {
//       res.status(401).json({ message: "Something went wrong" });
//     });
// };
