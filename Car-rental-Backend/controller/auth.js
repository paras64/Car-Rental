const model = require("../model/users.js");
const User = model.User;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const path = require("path");
const fs = require("fs");
const privateKey = fs.readFileSync(
  path.join(__dirname, "../myprivate.pem"),
  "utf-8"
);

exports.register = (req, res) => {
  const user = new User(req.body);
  const token = jwt.sign(req.body, privateKey, { algorithm: "RS256" });
  const hash = bcrypt.hashSync(req.body.password, 10);
  user.token = token;
  user.password = hash;
  user
    .save()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

exports.login = async (req, res) => {
  try {
    const doc = await User.findOne({ email: req.body.email });
    if (!doc) {
      // User not found
      res.status(401).json({ message: "Invalid email" });
      return;
    }
    const isAuth = bcrypt.compareSync(req.body.password, doc.password);
    if (isAuth) {
      const token = jwt.sign(req.body, privateKey, { algorithm: "RS256" });
      doc.token = token;
      doc
        .save()
        .then((data) => {
          res.status(200).json({ message: "Login successful", data: data });
        })
        .catch((err) => {
          res.status(400).json({ message: "Invalid Password", err: err });
        });
    } else {
      res.status(401).json({
        message: "Error while saving the token while login",
        err: err,
      });
    }
  } catch (err) {
    res.status(500).json({ message: "bad request", err: err });
  }
};
