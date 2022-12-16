const mongoose = require("mongoose");
var fs = require("fs");
const Product = require("../models/Product");
var obj;

mongoose.connect("mongodb://localhost:27017/productdisplay", (err) => {
  if (err) console.log("database not connected");
  else console.log("database productdisplay connected");
});

fs.readFile("products.json", "utf8", function (err, data) {
  if (err) throw err;
  obj = JSON.parse(data);
  addProducts(obj);
});

async function addProducts(data) {
  const products = data.products;

  for (let product of products) {
    await Product.create({
      title: product.title,
      description: product.description,
      price: product.price,
      discountPercentage: product.discountPercentage,
      rating: product.rating,
      stock: product.stock,
      brand: product.brand,
      category: product.category,
      thumbnail: product.thumbnail,
      images: product.images,
    });
    console.log(`Product ${product.id} created successfully`);
  }
}
