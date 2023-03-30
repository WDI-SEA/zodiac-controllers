const express = require("express");
const router = express.Router();

router.get("/aquarius", (req, res) => {
  res.render("air/aquarius", {
    airSigns: ["Aquarius", "Gemini", "Libra"],
    airTraits: [
      "movement",
      "creativity",
      "action",
      "adventure",
      "exciting",
      "easily provoked",
    ],
    title: "aquarius",
  });
});

router.get("/gemini", (req, res) => {
  res.render("air/gemini", {
    airSigns: ["Aquarius", "Gemini", "Libra"],
    airTraits: [
      "movement",
      "creativity",
      "action",
      "adventure",
      "exciting",
      "easily provoked",
    ],
    title: "gemini",
  });
});

router.get("/libra", (req, res) => {
  res.render("air/libra", {
    airSigns: ["Aquarius", "Gemini", "Libra"],
    airTraits: [
      "movement",
      "creativity",
      "action",
      "adventure",
      "exciting",
      "easily provoked",
    ],
    title: "libra",
  });
});

module.exports = router;
