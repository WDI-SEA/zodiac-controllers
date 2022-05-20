const express = require("express");
const ejsLayouts = require("express-ejs-layouts");
const res = require("express/lib/response");
const app = express();

PORT = 3005;
app.listen(PORT, () => {
  console.log("hello");
});

app.set("view engine", "ejs");
app.use(express.static("Public"));
app.use(ejsLayouts);

app.get("/", (req, res) => {
  res.render("index.ejs");
});
app.get("/water", (req, res) => {
  const waterT = [
    "private",
    "mysterious",
    "psychci",
    "charming",
    "emotional",
    "sensitive",
  ];
  res.render("water.ejs", { waterT: waterT });
});
app.get("/air", (req, res) => {
  const airT = [
    "movement",
    "creativity",
    "action",
    "adventure",
    "exciting",
    "easily provoked",
  ];
  res.render("air.ejs", { airT: airT });
});
app.get("/fire", (req, res) => {
  const fireT = [
    "passionate",
    "strong emotions",
    "temperamental",
    "energetic",
    "accomplished",
    "interesting",
  ];
  res.render("fire.ejs", { fireT: fireT });
});
app.get("/earth", (req, res) => {
  const earthT = [
    "grounded",
    "helpful",
    "practical",
    "realistic",
    "materialistic",
    "dependable",
  ];
  res.render("earth.ejs", { earthT: earthT });
});
