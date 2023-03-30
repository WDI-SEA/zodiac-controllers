const express = require("express");
const router = express.Router();

router.get("/pisces", (req, res) => {
  res.render("water/pisces", {
    waterSigns: ["Pisces", "Cancer", "Scorpio"],
    waterTraits: [
      "private",
      "mysterious",
      "psychic",
      "charming",
      "emotional",
      "sensitive",
    ],
    title: "pisces",
  });
});

router.get("/cancer", (req, res) => {
  res.render("water/cancer", {
    waterSigns: ["Pisces", "Cancer", "Scorpio"],
    waterTraits: [
      "private",
      "mysterious",
      "psychic",
      "charming",
      "emotional",
      "sensitive",
    ],
    title: "cancer",
  });
});

router.get("/scorpio", (req, res) => {
  res.render("water/scorpio", {
    waterSigns: ["Pisces", "Cancer", "Scorpio"],
    waterTraits: [
      "private",
      "mysterious",
      "psychic",
      "charming",
      "emotional",
      "sensitive",
    ],
    title: "scorpio",
  });
});

module.exports = router;
