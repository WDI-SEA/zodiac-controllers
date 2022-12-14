const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    res.render("earth.ejs");
  } catch (error) {
    console.error(error);
  }
});

router.get("/taurus", async (req, res) => {
  try {
    res.render("taurus.ejs");
  } catch (error) {
    console.error(error);
  }
});

router.get("/virgo", async (req, res) => {
  try {
    res.render("virgo.ejs");
  } catch (error) {
    console.error(error);
  }
});

router.get("/capricorn", async (req, res) => {
  try {
    res.render("capricorn.ejs");
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
