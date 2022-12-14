const express = require("express") 

const app = express()
const PORT = 3000

const elements = {
    air: {
        signs: ["aquarius", "gemeni", "libra"],
        traits: ["movement", "creativity", "action"],
    },

    water: {
        signs: ["pices", "cancer", "scorpio"],
        traits: ["private", "mysterious", "psychic"]
    },

    fire: {
        signs: ["aries", "leo", "sagittarius"],
        traits: ["passionate", "strong emotions", "tempermental", "energetic"]
    },

    earth: {
        signs: ["taurus", "virgo", "capricorn"],
        traits: ["grounded", "helpful", "practical", "realistic"]

    }
}

// CONTROLLERS
app.use("/water", require("./controllers/water"))
app.use("/air", require("./controllers/air"))
app.use("/fire", require("./controllers/fire"))
app.use("/earth", require("./controllers/earth"))

// ROUTES
app.get("/", (req, res) => {
    res.render("index.ejs")
})

/*
// WATER
app.get("/water", (req, res) => {
    //res.send("<h1>WATER</h1>")
    const signs = elements.water.signs
    const traits = elements.water.traits
    res.render("show.ejs", {signs: signs, traits: traits})
})

// AIR
app.get("/air", (req, res) => {
    //res.send("air")
    //res.send(elements.air.traits)
    const signs = elements.air.signs
    const traits = elements.air.traits
    res.render("show.ejs", {signs: signs, traits: traits})
})

// FIRE
app.get("/fire", (req, res) => {
    //res.send("fire")
    const signs = elements.fire.signs
    const traits = elements.fire.traits
    res.render("show.ejs", {signs: signs, traits: traits})
})

// EARTH
app.get("/earth", (req, res) => {
    //res.send("earth")
    const signs = elements.earth.signs
    const traits = elements.earth.traits
    res.render("show.ejs", {signs: signs, traits: traits})
})
*/ 

app.listen(PORT, () => {
    console.log(`Running port ${PORT}`)
})