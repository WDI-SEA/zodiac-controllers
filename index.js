// set up the express app
// organize the graphic into data
// stub up routes
// create view files, render

// NOTE layout ejs can be included like a partial, come back to later

const express = require("express")
const expressEjsLayouts = require("express-ejs-layouts")
const app = express()

const PORT = 3000

const elements = {
    air: {
        name: "air",
        signs: ["Aquarius", "Gemini", "Libra"],
        traits: ["Movement", "Creativity", "Action", "Adventure", "Exciting", "Easily Provoked"]
    },
    water: {
        name: "water",
        signs: ["Pisces", "Cancer", "Scorpio"],
        traits: ["Private", "Mysterious", "Psyhic", "Charming", "Emotional", "Sensitive"]
    },
    fire: {
        name: "fire",
        signs: ["Aries", "Leo", "Sagittarius"],
        traits: ["Passionate", "Strong Emotions", "Tempermental", "Energetic", "Accomplished", "Interesting"]
    },
    earth: {
        name: "earth",
        signs: ["Taurus", "Virgo", "Capricorn"],
        traits: ["Grounded", "Helpful", "Practical", "Realistic", "Materialistic", "Dependable"]
    }
}

// SET THE VIEW ENGINE
app.use(expressEjsLayouts)
app.set("view engine", "ejs")
app.use(express.static('public'))

// home route = localhost:3000/
// HTTP verb = GET   URL pattern = "/"
app.get("/", (req, res) => {
    // res.send("This is the home page")
    res.render("index")
})

// AIR route = localhost:3000/air
// HTTP verb = GET   URL pattern = "/air"


app.use("/water", require("./controllers/water"));

app.use("/air", require("./controllers/air"));


app.use("/fire", require("./controllers/fire"));

app.use("/earth", require("./controllers/earth"));

// WATER route = localhost:3000/water
// HTTP verb = GET   URL pattern = "/water"


// FIRE route = localhost:3000/fire
// HTTP verb = GET   URL pattern = "/fire"


// EARTH route = localhost:3000/earth
// HTTP verb = GET   URL pattern = "/earth"



app.listen(PORT, () => {
    console.log(`Cicadas singing on port ${PORT}`)
})