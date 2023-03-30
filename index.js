const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", {
    title: "home page",
  });
});

app.get("/air", (req, res) => {
  res.render("air", {
    airSigns: ["Aquarius", "Gemini", "Libra"],
    airTraits: [
      "movement",
      "creativity",
      "action",
      "adventure",
      "exciting",
      "easily provoked",
    ],
    title: "air signs",
  });
});

app.get("/water", (req, res) => {
  res.render("water", {
    waterSigns: ["Pisces", "Cancer", "Scorpio"],
    waterTraits: [
      "private",
      "mysterious",
      "psychic",
      "charming",
      "emotional",
      "sensitive",
    ],
    title: "water signs",
  });
});

app.get("/fire", (req, res) => {
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

app.get("/earth", (req, res) => {
  res.render("earth", {
    earthSigns: ["Taurus", "Virgo", "Capricorn"],
    earthTraits: [
      "grounded",
      "helpful",
      "practical",
      "realistic",
      "materialistic",
      "dependable",
    ],
    title: "earth signs",
  });
});

app.listen(PORT, () => {
  console.log("ahem...is this thing on?");
});
