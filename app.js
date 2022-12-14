const express = require("express");
const mongoose = require("mongoose");
const app = express();

/**
 * routes import
 */
const productRoute = require("./routes/product");

/**
 * middlewares
 */

/**
 * routes
 */
app.use("/api/products", productRoute);


mongoose.connect("mongodb://localhost:27017/productdisplay", (err) => {
  if (err) console.log("database not connected");
  else console.log("database productdisplay connected");
});

app.listen(3000, (err) => {
  if (err) console.log("error");
  else console.log("listening to port 3000");
});
