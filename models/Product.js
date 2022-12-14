const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  brand: {
    type: String,
  },
  type: {
    type: String,
    required: true,
    default: "good",
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
