//make an instance of express router
const express = require("express");
const router = express.Router();
//mount routes on the router
//GET /water/ -- renders view of bad movies
//GET /water
const elements = {
  air: {
    signs: ["aquarius", "gemini", "libra"],
    traits: ["movement", "creativity", "action"],
  },
  water: {
    signs: ["pisces", "cancer", "scorpio"],
    traits: ["private", "mysterious", "pyshic"],
  },

  fire: {
    signs: ["aries", "leo", "sagitarius"],
    traits: ["a"],
  },
  earth: {
    signs: ["taurus", "virgo", "capricorn"],
    traits: ["b"],
  },
};
router.get("/", (req, res) => {
  const signs = elements.water.signs;
  const traits = elements.water.traits;
  res.render("show.ejs", { signs: signs }, { traits: traits });
});

// router.get("/cancer", (req, res) => {
//   res.render("water.ejs");
// });
module.exports = router;
