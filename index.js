const express = require('express')
const ejsExpressLayouts= require('express-ejs-layouts')
const app = express()
const PORT = 8000
// const ejsLayouts = require('express-ejs-layouts');

app.set("view engine", "ejs")
app.use(ejsExpressLayouts)

app.use('/water', require('./controllers/water'))
app.use('/air', require('./controllers/air'))
app.use('/fire', require('./controllers/fire'))
app.use('/earth', require('./controllers/earth'))


app.get('/', (req,res) => {
    res.render("index.ejs")
})

// const waterTraits = ['Private', 'Mysterious', 'Psychic', 'Charming', 'Emotional', 'Sensitive']
// app.get('/water', (req,res) => {
//     res.render("Water", {traits: waterTraits})
// })

// const airTraits = ['Movement', 'Creativity', 'Action', 'Adventure', 'Exciting', "Easily Provoked"]
// app.get('/air', (req,res) => {
//     res.render("Air", {traits: airTraits})
// })

// const fireTraits = ['Passionate', 'Strong Emotions', 'Temperamental', 'Energetic', 'Accomplished', 'Interesting']
// app.get('/fire', (req,res) => {
//     res.render("Fire", {traits: fireTraits})
// })

// const earthTraits = ['Grounded', 'Helpful', 'Practical', 'Realistic', 'Materialistic', 'Dependable']
// app.get('/earth', (req,res) => {
//     res.render("Earth", {traits: earthTraits})
// })

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

// home route = localhost:3000/
// HTTP verb = get URL pattern = /
// app.get("/", (req, res) => {
//     res.send("this is the home page")
// })

// app.get("/air", (req, res) => {
//     res.render("show", {elements: elements.air} )
// })

// app.get("/water", (req, res) => {
//     res.render("show", {elements: elements.water} )
// })

// app.get("/fire", (req, res) => {
//     res.render("show", {elements: elements.fire} )
// })

// app.get("/earth", (req, res) => {
//     res.render("show", {elements: elements.earth} )
// })


app.listen(PORT, () => {
    console.log(`port is running ${PORT}`)
})