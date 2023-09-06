require("dotenv").config();
const model = require("../model/users.js");
const User = model.User;
const express = require("express");
const nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// const path = require("path");
// const fs = require("fs");
// const privateKey = fs.readFileSync(
//   path.join(__dirname, "../myprivate.pem"),
//   "utf-8"
// );
require("dotenv").config();
const privateKey = process.env.PRIVATE_KEY;
exports.forgotpassword = async (req, res) => {
  try {
    const doc = await User.findOne({ email: req.body.email });
    if (!doc) {
      res
        .status(401)
        .json({ message: "Invalid email, Please check and try again" });
      return;
    }
    secret = privateKey + doc.password;
    const token = jwt.sign({ email: doc.email, id: doc._id }, secret, {
      algorithm: "RS256",
      expiresIn: "5m",
    });
    const link = `http://localhost:8000/forgotpassword/${doc._id}/${token}`;

    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "kartikgothwal1128@gmail.com",
        pass: "bbteoluswcuuhqlz",
      },
    });

    var mailOptions = {
      from: "carrentalstore@gmail.com",
      to: req.body.email,
      subject: "Car Rental Store: Reset Password",
      text: link,
    };

    transporter.sendMail(mailOptions, function (err, info) {
      if (err) {
        res.status(401).json({ message: "bad request", err: err });
      } else {
        res
          .status(200)
          .send("Password reset link has been sent to your registered email");
      }
    });
  } catch (err) {
    res.status(500).json({ message: "bad request", err: err });
  }
};

exports.getForgotRequest = async (req, res) => {
  const { id, token } = req.params;
  const doc = await User.findOne({ _id: id });
  if (!doc) {
    res.status(401).send("<h1>User Not Verified</h1>");
    return;
  }
  try {
    secret = privateKey + doc.password;
    const verify = jwt.verify(token, secret, { algorithm: "RS256" });
    console.log(verify);
    res.redirect(`http://localhost:3000/confirmpassword/${doc.email}`);
  } catch (err) {
    res.status(401).send("<h1 >User Not Verified</h1>");
  }
};
exports.updatePassword = async (req, res) => {
  const { newPassword, userEmail } = req.body;
  const doc = await User.findOne({ email: userEmail });
  if (!doc) {
    res.status(401).send("User does not exists");
    return;
  }
  try {
    const hash = bcrypt.hashSync(newPassword, 10);
    const doc = await User.findOneAndUpdate(
      { email: userEmail },
      { $set: { password: hash } }
    );
    res.status(202).send("Password has been modified");
  } catch (err) {
    res.status(304).send("Bad Request, Try again");
  }
};
