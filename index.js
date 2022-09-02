const express = require("express")
const app = express()

const PORT = 3000 

const elements = {
    air: {
        name: "air",
        signs: ["aquarius", "geminin", "libra"],
        traits: ["movement", "creativity", "action", "adventure", "exciting", "easily provoked"]
    },
    water: {
        name: "water",
        signs: ["pisces", "cancer", "scorpio"],
        traits: ["private", "mysterious", "pyshic", "charming", "emotional", "sensitive"]
    },
    fire: {
        name: "fire",
        signs: ["aries", "leo", "sagittarius"],
        traits: ["passionate", "strong emotions", "tempermental", "energetic", "accompli,sed", "interesting"]
    },
    earth: {
        name: "earth",
        signs: ["taurus", "virgo", "capricorn"],
        traits: ["grounded", "helpful", "practical", "realistic", "materialistic", "dependable"]
    }
}

// SET THE VIEW ENGINE
app.set("view engine", "ejs")

app.use('/air', require('./controllers/air'))

app.use('/earth', require('./controllers/earth'))

app.use('/fire', require('./controllers/fire'))

app.use('/water', require('./controllers/water'))

// home route = localhost:3000/
// HTTP verb = GET   URL pattern = "/"
app.get("/", (req, res) => {
    // res.send("This is the home page")
    res.render("index")
})

// AIR route = localhost:3000/air
// HTTP verb = GET   URL pattern = "/air"
app.get("/air", (req, res) => {
    // ROUTE CHECK
    // res.send("AIR")
    // DATA CHECK
    // res.json(elements.air)
    // TEMPLATE
    res.render("show", {element: elements.air})
})

// WATER route = localhost:3000/water
// HTTP verb = GET   URL pattern = "/water"
app.get("/water", (req, res) => {
    // res.send("WATER")
    res.render("show", {element: elements.water})
})

// FIRE route = localhost:3000/fire
// HTTP verb = GET   URL pattern = "/fire"
app.get("/fire", (req, res) => {
    // res.send("FIRE")
    res.render("show", {element: elements.fire})
})

// EARTH route = localhost:3000/earth
// HTTP verb = GET   URL pattern = "/earth"
app.get("/earth", (req, res) => {
    // res.send("EARTH")
    res.render("show", {element: elements.earth})
})


app.listen(PORT, () => {
    console.log(`Cicadas singing on port ${PORT}`)
})