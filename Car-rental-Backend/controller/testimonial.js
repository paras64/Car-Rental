const model = require("../model/testimonial.js");
const Testimonial = model.Testimonial;

exports.getTestimonialData = (req, res) => {
  if (req.query && req.query.limit) {
    const testimonials = Testimonial.find().limit(req.query.limit);
    testimonials
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => {
        res.status(200).json(err);
      });
  } else {
    const testimonials = Testimonial.find();
    testimonials
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => {
        res.status(200).json(err);
      });
  }
};
exports.createTestimonial = (req, res) => {
  const testimonial = new Testimonial(req.body);
  testimonial
    .save()
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};
