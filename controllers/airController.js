const express = require("express");
const router = express.Router();

router.get("/gemini", (req, res) => {
  res.send("gemini");
});
router.get("/libra", (req, res) => {
  res.send("libra");
});
router.get("/aquarius", (req, res) => {
  res.send("aquarius");
});

module.exports = router;
