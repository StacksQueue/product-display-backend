const mongoose = require("mongoose");

const ProductTypeSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  dis: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("product_type", ProductTypeSchema)