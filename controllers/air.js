//make an instance of express router
const express = require("express");
const router = express.Router();
//mount routes on the router
//GET /water/ -- renders view of bad movies
//GET /air
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
  const signs = elements.air.signs;
  const traits = elements.air.traits;
  res.render("show.ejs", { signs: signs }, { traits: traits });
});

module.exports = router;
