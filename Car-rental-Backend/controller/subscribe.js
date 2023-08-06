const model = require("../model/subscribe.js");
const Subscribe = model.Subscribe;

exports.getSubscribe = async (req, res) => {
  const subscribe = await new Subscribe(req.body);
  subscribe
    .save()
    .then((data) => {
      res.status(201).send(data);
    })
    .catch((err) => {
      res.status(401).json(err);
    });
};
