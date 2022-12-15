const mongoose = require("mongoose");
var fs = require("fs");
var obj;

fs.readFile("products.json", "utf8", function (err, data) {
  if (err) throw err;
  obj = JSON.parse(data);
  addProducts(obj);
});

async function addProducts(data) {
  const products = data.products;
  console.log(products[0])
}
