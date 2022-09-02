const express = require("express");
const ejsLayouts = require("express-ejs-layouts");
const app = express();
const PORT = 8000;

const elements = {
    water: 
    {
        name: "Water",
        signs: ["Pisces", "Cancer", "Scorpio"],
        traits: ["private", "mysterious", "psychic", "charming", "emotional", "sensitive"]
    },
    earth: 
    {
        name: "Earth",
        signs: ["Taurus", "Virgo", "Capricorn"],
        traits: ["grounded", "helpful", "practical", "realistic", "materialistic", "dependable"]
    },
    fire: 
    {
        name: "Fire",
        signs: ["Aries", "Leo", "Sagittarius"],
        traits: ["passionate", "strong emotions", "temperamental", "energetic", "accomplished", "interesting"]
    },
    air: 
    {
        name: "Air",
        signs: ["Aquarius", "Gemini", "Libra"],
        traits: ["movement", "creativity", "action", "adventure", "exciting", "easily provoked"]
    }
}

app.set("view engine", "ejs");    // Set view engine to EJS
app.use(ejsLayouts);
app.use(express.static("public"));

// Controllers
app.use("/water", require("./controllers/water"));
app.use("/earth", require("./controllers/earth"));
app.use("/fire", require("./controllers/fire"));
app.use("/air", require("./controllers/air"));

// Routes
app.get("/", (req, res) =>
{
    res.render("index");
})
app.get("/water", (req, res) =>    // water
{
    res.render("element-zodiacs", {element: elements.water});
})
app.get("/earth", (req, res) =>    // earth
{
    res.render("element-zodiacs", {element: elements.earth});
})
app.get("/fire", (req, res) =>    // fire
{
    res.render("element-zodiacs", {element: elements.fire});
})
app.get("/air", (req, res) =>    // air
{
    res.render("element-zodiacs", {element: elements.air});
})

// Web application listening
app.listen(PORT, () =>
{
    console.log(`Express server for Zodiac Controllers listening on Port ${PORT}`);
})