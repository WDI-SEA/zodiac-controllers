const express = require('express')
const app = express()
const ejslayouts = require('express-ejs-layouts')
const PORT = 8001

// configure app to use ejs - // 1st route, 2nd function
app.set("view engine", "ejs")
app.use(ejslayouts)

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

// ROUTES home route local host: 8001
// HTTP verb = GET URL pattern="/"
app.get("/", (req, res) => {
    res.render('index.ejs')
})
app.get("/air", (req, res) => {
    res.render('air.ejs', {traits: airTraits})
})
app.get("/fire", (req, res) => {
    res.render('fire.ejs', {traits: fireTraits})
})
app.get("/earth", (req, res) => {
    res.render('earth.ejs', {traits: earthTraits})
})

// LISTENER 
app.listen(PORT, () => {
    console.log(`testing new site ${PORT}`)
})