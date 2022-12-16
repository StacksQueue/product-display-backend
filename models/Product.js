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
    type: Number,
  },
  stock: {
    type: Number,
  },
  brand: {
    type: String,
  },
  category: {
    type: String,
  },
  thumbnail: {
    type: String,
  },
  images: [
    {
      type: String,
    },
  ],
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
