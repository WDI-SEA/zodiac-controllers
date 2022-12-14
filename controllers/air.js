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

router.get("/gemini", async (req, res) => {
  try {
    res.render("gemini.ejs");
  } catch (error) {
    console.error(error);
  }
});

router.get("/libra", async (req, res) => {
  try {
    res.render("libra.ejs");
  } catch (error) {
    console.error(error);
  }
});

router.get("/aquarius", async (req, res) => {
  try {
    res.render("aquarius.ejs");
  } catch (error) {
    console.error(error);
  }
});
module.exports = router;
