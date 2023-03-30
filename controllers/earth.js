const express = require("express");
const router = express.Router();

router.get("/taurus", (req, res) => {
  res.render("earth/taurus", {
    earthSigns: ["Taurus", "Virgo", "Capricorn"],
    earthTraits: [
      "grounded",
      "helpful",
      "practical",
      "realistic",
      "materialistic",
      "dependable",
    ],
    title: "taurus",
  });
});

router.get("/virgo", (req, res) => {
  res.render("earth/virgo", {
    earthSigns: ["Taurus", "Virgo", "Capricorn"],
    earthTraits: [
      "grounded",
      "helpful",
      "practical",
      "realistic",
      "materialistic",
      "dependable",
    ],
    title: "virgo",
  });
});

router.get("/capricorn", (req, res) => {
  res.render("earth/capricorn", {
    earthSigns: ["Taurus", "Virgo", "Capricorn"],
    earthTraits: [
      "grounded",
      "helpful",
      "practical",
      "realistic",
      "materialistic",
      "dependable",
    ],
    title: "capricorn",
  });
});

module.exports = router;
