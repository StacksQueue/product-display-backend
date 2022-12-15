const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

/**
 * routes import
 */
const productRoute = require("./routes/product");
const productTypeRoute = require("./routes/productType");

/**
 * middlewares
 */
 app.use(express.json());
 app.use(cors());
/**
 * routes
 */
app.use("/api/product", productRoute);
app.use("/api/producttype", productTypeRoute);

mongoose.connect("mongodb://localhost:27017/productdisplay", (err) => {
  if (err) console.log("database not connected");
  else console.log("database productdisplay connected");
});

app.listen(3000, (err) => {
  if (err) console.log("error");
  else console.log("listening to port 3000");
});
