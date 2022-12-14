const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    res.render("water.ejs", {
      title: "Water | Home",
      traits: [
        "Private",
        "Mysterious",
        "Psychic",
        "Charming",
        "Emotional",
        "Sensitive",
      ],
    });
  } catch (error) {
    console.error(error);
  }
});

router.get("/cancer", async (req, res) => {
  try {
    res.render("cancer.ejs", {
      title: "Water | Cancer",
    });
  } catch (error) {
    console.error(error);
  }
});

router.get("/scorpio", async (req, res) => {
  try {
    res.render("scorpio.ejs", {
      title: "Water | Scorpio",
    });
  } catch (error) {
    console.error(error);
  }
});

router.get("/pisces", async (req, res) => {
  try {
    res.render("pisces.ejs", {
      title: "Water | Pisces",
    });
  } catch (error) {
    console.error(error);
  }
});
module.exports = router;
