const express = require("express");
const app = express();
const ejsLayouts = require("express-ejs-layouts");

app.set("view engine", "ejs");
app.use(ejsLayouts);

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/fire", (req, res) => {
  res.render("./fire/index.ejs", {
    element: "Fire",
    signs: ["Aries", "Leo", "Sagittarius"],
    traits: ["private", "psychic", "sensitive", "charming", "mysterious"],
  });
});

app.get("/earth", (req, res) => {
  res.render("./earth/index.ejs", {
    element: "Earth",
    signs: ["Taurus", "Virgo", "Capricorn"],
    traits: ["private", "psychic", "sensitive", "charming", "mysterious"],
  });
});

app.get("/air", (req, res) => {
  res.render("./air/index.ejs", {
    element: "Air",
    signs: ["Gemini", "Libra", "Aquarius"],
    traits: ["private", "psychic", "sensitive", "charming", "mysterious"],
  });
});

app.get("/water", (req, res) => {
  res.render("./water/index.ejs", {
    element: "Water",
    signs: ["Pisces", "Cancer", "Scorpio"],
    traits: ["private", "psychic", "sensitive", "charming", "mysterious"],
  });
});
app.listen(8000, () => {
  console.log("8000 here");
});
