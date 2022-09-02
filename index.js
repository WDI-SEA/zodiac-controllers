const express = require('express')
const app = express()
const PORT = 8000

const elements = {
    air: {
        name: "air",
        signs: ["aquarius","gemini","libra"],
        traits: ["movement", "creativity", "action", "adventure","exciting", "easily provked"]
    },
    water: {
        name: "water",
        signs: ["pisces", "cancer", "scorpipo"],
        traits: ["private", "mysterious", "pyshic", "charming", "emotional", "sensitive"]

    },
    fire: {
        name: "fire",
        signs: ["aries", "leo", "sagittarius"],
        traits: ["passionate", "strong emotions", "tempermental", "energetic", "accomplished", "interesting"]
    },
    earth:{
        name: "earth",
        signs: ["taurus", "virgo", "capricorn"],
        traits: ["grounded", "helpful", "practical", "realistic", "materialistic", "dependable"]
    }
}
// SET THE VIEW ENGINE
app.set("view engine", "ejs");


app.get('/', (req,res) => {
    res.render("index")
})
app.get('/water', (req,res) => {
    res.render("shows", {element: elements.water})
})
app.get('/air', (req,res) => {
    res.render("shows", {element: elements.air})
})
app.get('/fire', (req,res) => {
    res.render("shows", {element: elements.fire})
})
app.get('/earth', (req,res) => {
    res.render("shows", {element: elements.earth})
})

app.listen(PORT, () => {
    console.log(`Express is running on ${PORT}`)
})