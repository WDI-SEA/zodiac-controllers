const express = require("express");
const app = express();
const PORT = 8000;
app.set("view engine", "ejs");    // Set view engine to EJS

// Routes
app.get("/", (req, res) =>
{
    res.render("index");
})
app.get("/water", (req, res) =>    // water
{
    res.render("water-zodiac", {traits: ["private", "mysterious", "psychic", "charming", "emotional", "sensitive"]});
})
app.get("/earth", (req, res) =>    // earth
{
    res.render("earth-zodiac", {traits: ["grounded", "helpful", "practical", "realistic", "materialistic", "dependable"]});
})
app.get("/fire", (req, res) =>    // fire
{
    res.render("fire-zodiac", {traits: ["passionate", "strong emotions", "temperamental", "energetic", "accomplished", "interesting"]});
})
app.get("/air", (req, res) =>    // air
{
    res.render("air-zodiac", {traits: ["movement", "creativity", "action", "adventure", "exciting", "easily provoked"]});
})

// Web application listening
app.listen(PORT, () =>
{
    console.log(`Express server for Zodiac Controllers listening on Port ${PORT}`);
})