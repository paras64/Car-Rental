const express = require("express");
const router = express.Router();
const SubscribeController = require("../controller/subscribe.js");

router.post("/", SubscribeController.getSubscribe);
exports.router = router;
