const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    res.render("fire.ejs");
  } catch (error) {
    console.error(error);
  }
});

router.get("/leo", async (req, res) => {
  try {
    res.render("leo.ejs");
  } catch (error) {
    console.error(error);
  }
});

router.get("/aries", async (req, res) => {
  try {
    res.render("aries.ejs");
  } catch (error) {
    console.error(error);
  }
});

router.get("/sagittarius", async (req, res) => {
  try {
    res.render("sagittarius.ejs");
  } catch (error) {
    console.error(error);
  }
});
module.exports = router;
