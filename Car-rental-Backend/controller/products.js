const model = require("../model/products.js");
const Product = model.Product;

exports.getAllProducts = async (req, res) => {
  if(req.query){
    const products = await Product.find().limit(req.query.limit).exec();
    res.json(products);
    return 
  }
  const products = await Product.find();
  res.json(products);
};

exports.createProduct = async (req, res) => {
  const products = await new Product(req.body);
  products
    .save()
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
};

// {
//   "title":"Lexus RCF",
//   "year":2020,
//   "price":4499,
//   "category":"Normal",
//   "model":"Lexus RCF 2020",
//   "capacity": 4,
//   "discountPercentage":9.99,
//   "rating":0,
//   "brand":"Lexus",
//   "thumbnail":"https://car-rental-store.vercel.app/static/media/Mustang.1165cc44730c7…",
//   "weight":"230lbs",
//   "speed":"5.59s",
//   "color":"Red",
//   "mileage":"180mph",
//   "available":"yes",
//   "drive":"Auto",
//   "stocks":6,
//   "images":["https://png.pngitem.com/pimgs/s/627-6274298_2011-lexus-es-350-hd-png-download.png", "https://www.pngkit.com/png/full/353-3536970_lexus-png-red-lexus-on-a-transparent-background.png"]
//   }

// {
//   Model: "Range Rover Evoque",
//   Mileage: "220mph",
//   Weight: "280lbs",
//   Color: "White",
//   Speed: "2.59s",
//   Charges: "5999",
//   Available: "Indore",
//   drive:"Manual",
//   image: RoverImage,
//   ModelName: "Land Rover Range Rover Evoque",
// },
