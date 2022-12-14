const express = require("express");
const router = express.Router();

//air
router.get("/", async (req, res) => {
  try {
    res.render("air");
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
