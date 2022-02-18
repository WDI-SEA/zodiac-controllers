const express = require("express");
const app = express();
const ejsLayouts = require("express-ejs-layouts");

// MIDDLEWARE
app.set("view engine", "ejs");
app.use(ejsLayouts);

// Home route
// VERB: GET(read) URL: http://localhost:8000
app.get("/", (req, res) => {
  res.render("index.ejs");
});

// AIR route
// VERB: GET(read) URL: http://localhost:8000/air
app.get("/air", (req, res) => {
  res.render("air.ejs", { air: ["movement", "creativity", "action", "adventure", "exciting", "easily provoked"] });
});

// WATER route
// VERB: GET(read) URL: http://localhost:8000/water
app.get("/water", (req, res) => {
  res.render("water.ejs", { water: ["private", "mysterious", "psychic", "charming", "emotional", "sensitive"] });
});

// FIRE route
// VERB: GET(read) URL: http://localhost:8000/fire
app.get("/fire", (req, res) => {
  res.render("fire.ejs", { fire: ["passionate", "strong emotions", "temperamental", "energetic", "accomplished", "interesting"] });
});

// EARTH route
// VERB: GET(read) URL: http://localhost:8000/earth
app.get("/earth", (req, res) => {
  res.render("earth.ejs", { earth: ["grounded", "helpful", "practical", "realistic", "materialistic", "dependable"] });
});


app.listen(8000, () => {
  console.log("Nodemon out there running through port 8000");
});