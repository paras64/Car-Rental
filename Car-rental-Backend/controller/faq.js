const Model = require("../model/faq");
const FaqModel = Model.FaqModel;

exports.CreateFaq = async (req, res) => {
  const faq = await new FaqModel(req.body);
  faq
    .save()
    .then((data) => {
      res.status(201).json({ message: "New Faq has been created", data: data });
    })
    .catch((err) => {
      res.json({ message: "Something went wrong", err: err });
    });
};
exports.getAllFaq = async (req, res) => {
  const faq = FaqModel.find();
  faq
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.json({ message: "Something went wrong", err: err });
    });
};

exports.ModifyFaq = async (req, res) => {
  try {
    const { Index, FaqBox } = req.body;
    console.log(FaqBox);
    const doc = await FaqModel.findByIdAndUpdate(
      { _id: Index },
      { $set: FaqBox },
      { new: true }
    );
    console.log(doc);
    res.status(201).json({ message: "FAQ has been updated" });
  } catch (err) {
    res.status(400).json({ message: "Updating failed" });
  }
};
