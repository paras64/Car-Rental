require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

//DB CONNECTIONS
main()
  .then(console.log("Connected to database"))
  .catch((err) => console.error(err));
async function main() {
  await mongoose.connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.ejahxrh.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
  );
}

//ROUTERS
const ProductRouter = require("./routes/products.js");
const SubscribeRouter = require("./routes/subscribe.js");
const UserRouter = require("./routes/auth.js");
const TestimonialRouter = require("./routes/testimonial.js");

//MIDDLEWARES
app.use(cors());
app.use(express.json());
app.use("/products", ProductRouter.router);
app.use("/subscribe", SubscribeRouter.router);
app.use("/testimonials", TestimonialRouter.router);
app.use("/auth", UserRouter.router);

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(process.env.PORT);
