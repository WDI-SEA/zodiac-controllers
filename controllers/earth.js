//make an instance of express router
const express = require("express");
const router = express.Router();
//GET /earth
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
  const signs = elements.earth.signs;
  const traits = elements.earth.traits;
  res.render("show.ejs", { signs: signs, traits: traits, element: "earth" });
});

router.get("/:sign", (req, res) => {
  res.send(req.params.sign);
});
module.exports = router;
