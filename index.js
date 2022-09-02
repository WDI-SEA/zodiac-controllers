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
    res.send("earth")
})
app.get("/fire", (req, res) =>    // fire
{
    res.send("fire")
})
app.get("/air", (req, res) =>    // air
{
    res.send("air")
})

// Web application listening
app.listen(PORT, () =>
{
    console.log(`Express server for Zodiac Controllers listening on Port ${PORT}`);
})