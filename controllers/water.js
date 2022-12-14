const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    res.render("water.ejs");
  } catch (error) {
    console.error(error);
  }
});
// /water/cancer	image of cancer symbol
// /water/scorpio	image of scorpio symbol
// /water/pisces	image of pisces symbol

router.get("/cancer", async (req, res) => {
  try {
    res.render("cancer.ejs");
  } catch (error) {
    console.error(error);
  }
});

router.get("/scorpio", async (req, res) => {
  try {
    res.render("scorpio.ejs");
  } catch (error) {
    console.error(error);
  }
});

router.get("/pisces", async (req, res) => {
  try {
    res.render("pisces.ejs");
  } catch (error) {
    console.error(error);
  }
});
module.exports = router;
