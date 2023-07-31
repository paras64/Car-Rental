const express = require("express");
const router = express.Router();
const TestimonialController = require("../controller/testimonial");

router
  .get("/", TestimonialController.getTestimonialData)
  .post("/addtestimonial", TestimonialController.createTestimonial);

exports.router = router;
