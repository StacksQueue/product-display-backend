const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
  discountPercentage: {
    type: Number,
  },
  rating: {
    type: Number
  }, 
  producttype: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "product_type",
    required: true,
  },
  imageUrl: {
    type: String,
    default:
      "https://raw.githubusercontent.com/StacksQueue/product-display/main/src/assets/default.png",
  },
  dateAcquired: {
    type: Date,
    required: true,
    default: Date.now,
  },
  dis: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("product", ProductSchema);
