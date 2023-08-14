const model = require("../model/users.js");
const User = model.User;

exports.getOrders = async (req, res) => {
  const { email } = req.query;
  try {
    const doc = await User.findOne({ email: email }).populate(
      "orderdetails.product"
    );
    if (!doc) {
      res.status(200).json({ message: "No orders found" });
    }
    res.status(200).json(doc.orderdetails);
  } catch {
    res.status(500).json({ message: "Something went wrong" });
  }
};

exports.Order = async (req, res) => {
  try {
    const { orderDetails, UserDetails } = req.body;
    const user = await User.findOne({ email: UserDetails.email });
    if (!user) {
      res.status(400).json({ message: "User Not Found" });
      return;
    }
    user.orderdetails.push(orderDetails);

    await user
      .save()
      .then((response) => {
        res.status(201).json({ message: "Order Booked", response });
      })
      .catch((err) => {
        res.status(500).json({ message: "Something went wrong" }, err);
      });
  } catch {
    res.status(500).json({ message: "Something went wrong" });
  }
};
