// required packages
const express = require("express");
const ejsLayouts = require("express-ejs-layouts");
const res = require("express/lib/response");

// app setup
const app = express();
const PORT = 3001;
app.set("view engine", "ejs");

// middlewares
app.use(ejsLayouts);

app.use((req, res, next) => {
  // do some middleware stuff
  console.log("hello from inside a middleware!");
  // once your done, invoke next to go to the th next route/middleware
  next();
});

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/water", (req, res) => {
  res.render("./water/index.ejs", {
    element: "Water",
    signs: ["Pisces", "Cancer", "Scorpio"],
    traits: [
      "Private",
      "Mysterious",
      "Pyschic",
      "Charming",
      "Emo",
      "Sensitive",
    ],
  });
});

app.get("/earth", (req, res) => {
  res.render("./earth/index.ejs", {
    element: "Earth",
    signs: ["Taurus", "Virgo", "Capicorn"],
    traits: [
      "Grounded",
      "Helpful",
      "Practical",
      "Realistic",
      "Dependable",
      "Materialistic",
    ],
  });
});

app.get("/fire", (req, res) => {
  res.render("./fire/index.ejs", {
    element: "Fire",
    signs: ["Aries", "Leo", "Sagittarius"],
    traits: [
      "Passionate",
      "Strong Emotions",
      "Tempermental",
      "Lucky",
      "Accomplished",
      "Intersting",
    ],
  });
});

app.get("/air", (req, res) => {
  res.render("./air/index.ejs", {
    element: "Air",
    signs: ["Aquarius", "Gemini", "Libra"],
    traits: [
      "Movement",
      "Creativity",
      "Action",
      "Lucky",
      "Adventure",
      "Easily Provoked",
    ],
  });
});

// vary very last middleware is for 404ing
app.use((req, res) => {
  res.send("404 error, page not found 🔎");
});

app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`listienng to port ${PORT} 🎙`);
});
