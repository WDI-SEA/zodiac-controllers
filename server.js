const express = require("express");
const ejsLayouts = require("express-ejs-layouts");
const PORT = 3000;
const app = express();

app.set("view engine", "ejs");
app.use(express.static("Public"));

app.use(ejsLayouts);

app.get("/", (req, res) => {
  //   res.send("Homepage");
  res.render("index.ejs");
});

app.get("/water", (req, res) => {
  //   res.send("Water");
  const waterSigns = ["Pisces", "Cancer", "Scorpio"];
  const waterTraits = [
    "private",
    "mysterious",
    "psychic",
    "charming",
    "emotional",
    "sensitive",
  ];
  res.render("water.ejs", { waterSigns, waterTraits });
});

app.get("/air", (req, res) => {
  //   res.send("Air");
  const airSigns = ["Aquarius", "Gemini", "Libra"];
  const airTraits = [
    "movement",
    "creativity",
    "action",
    "adventure",
    "exciting",
    "easily provoked",
  ];
  res.render("air.ejs", { airSigns, airTraits });
});

app.get("/fire", (req, res) => {
  //   res.send("Fire");
  const fireSigns = ["Aries", "Leo", "Sagittarius"];
  const fireTraits = [
    "passionate",
    "strong emotions",
    "temperamental",
    "energetic",
    "accomplished",
    "interesting",
  ];
  res.render("fire.ejs", { fireSigns, fireTraits });
});

app.get("/earth", (req, res) => {
  //   res.send("Earth");
  const earthSigns = ["Taurus", "Virgo", "Capricorn"];
  const earthTraits = [
    "grounded",
    "helpful",
    "practical",
    "realistic",
    "materialistic",
    "dependable",
  ];
  res.render("earth", { earthSigns, earthTraits });
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
