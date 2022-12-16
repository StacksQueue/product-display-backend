const express = require("express");
const Product = require("../models/Product");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    let { page = 1, limit = 25, search = "" } = req.query;
    let query = {
      dis: true,
      $or: [
        { title: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
      ],
    };
    let [products, total] = await Promise.all([
      Product.find(query)
        .limit(limit)
        .skip(limit * (page - 1)),
      Product.find(query).count(),
    ]);
    res.json({
      data: products,
      total: total,
      message: "get",
      success: true,
    });
    // res.json({ data: null, message: "get", success: true });
  } catch (err) {
    res.json({ data: null, message: err.message, success: false });
  }
});

router.post("/", async (req, res) => {
  try {
    let data = req.body;
    console.log(data);
    await Product.create(data);
    res.json({ data: null, message: "post", success: true });
  } catch (err) {
    res.json({ data: null, message: err.message, success: false });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    res.json({ data: null, message: "patch", success: true });
  } catch (err) {
    res.json({ data: null, message: err.message, success: false });
  }
});

router.delete("/:id", async (req, res) => {
  try {
  } catch (err) {
    res.json({ data: null, message: err.message, success: false });
  }
});

module.exports = router;
