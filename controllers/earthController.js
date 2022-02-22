const express = require("express");
const router = express.Router();

router.get("/taurus", (req, res) => {
  res.send("taurus");
});
router.get("/virgo", (req, res) => {
  res.send("virgo");
});
router.get("/capricorn", (req, res) => {
  res.send("capricorn");
});
module.exports = router;
