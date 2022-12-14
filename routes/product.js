const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    console.log(req.query)
    res.json({ data: null, message: "success", success: true });
  } catch (err) {
    res.json({ data: null, message: err.message, success: true });
  }
});

router.post("/", async (req, res) => {
    try {
      console.log(req.query)
      res.json({ data: null, message: "success", success: true });
    } catch (err) {
      res.json({ data: null, message: err.message, success: true });
    }
  });

module.exports = router;
