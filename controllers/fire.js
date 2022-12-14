const express = require("express");
const router = express.Router();
//GET /fire
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
  const signs = elements.fire.signs;
  const traits = elements.fire.traits;
  res.render("show.ejs", { signs: signs }, { traits: traits });
});
module.exports = router;
