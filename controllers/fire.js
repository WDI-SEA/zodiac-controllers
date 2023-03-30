const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("fire", {
    fireSigns: ["Aries", "Leo", "Sagittarius"],
    fireTraits: [
      "passionate",
      "strong emotions",
      "temperamental",
      "energetic",
      "accomplished",
      "interesting",
    ],
    title: "fire signs",
  });
});

router.get("/aries", (req, res) => {
  res.render("fire/aries", {
    fireSigns: ["Aries", "Leo", "Sagittarius"],
    fireTraits: [
      "passionate",
      "strong emotions",
      "temperamental",
      "energetic",
      "accomplished",
      "interesting",
    ],
    title: "aries",
  });
});

router.get("/leo", (req, res) => {
  res.render("fire/leo", {
    fireSigns: ["Aries", "Leo", "Sagittarius"],
    fireTraits: [
      "passionate",
      "strong emotions",
      "temperamental",
      "energetic",
      "accomplished",
      "interesting",
    ],
    title: "leo",
  });
});

router.get("/sagittarius", (req, res) => {
  res.render("fire/sagittarius", {
    fireSigns: ["Aries", "Leo", "Sagittarius"],
    fireTraits: [
      "passionate",
      "strong emotions",
      "temperamental",
      "energetic",
      "accomplished",
      "interesting",
    ],
    title: "saggitarius",
  });
});

module.exports = router;
