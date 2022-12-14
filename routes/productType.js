const express = require("express");
const mongoose = require("mongoose");
const ProductType = require("../models/AddedProduct");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    let data = req.body;
    await ProductType.create(data);
    res.json({ data: null, message: "success register", success: true });
  } catch (err) {
    res.json({ data: null, message: err.message, success: false });
  }
});

module.exports = router;
