const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const ejsLayouts = require("express-ejs-layouts");
const app = express();
const PORT = 8000;

app.use(ejsLayouts);

app.set("view engine", "ejs");

// ROUTES

app.get("/", (req, res) => {
  // __dirname = node shortcut for the abs path to current directory
  // res.sendFile(__dirname + "/views/index.html");
  // ejs already knows to look inside of a views folder
  res.render("index.ejs");
});

app.get("/water", (req, res) => {
  res.render("water.ejs", {
    traits: [
      "private",
      "mysterious",
      "psychic",
      "charming",
      "emotional",
      "sensitive",
    ],
  });
});
app.get("/air", (req, res) => {
  res.render("air.ejs", {
    traits: [
      "movement",
      "creativity",
      "action",
      "adventure",
      "exciting",
      "easily provoked",
    ],
  });
});
app.get("/earth", (req, res) => {
  res.render("earth.ejs", {
    traits: [
      "grounded",
      "helpful",
      "practical",
      "realistic",
      "materialistic",
      "dependable",
    ],
  });
});
app.get("/fire", (req, res) => {
  res.render("fire.ejs", {
    traits: [
      "passionate",
      "strong emotions",
      "temperamental",
      "energetic",
      "accomplished",
      "interesting",
    ],
  });
});

app.listen(PORT, () => {
  console.log("server is so live");
});
