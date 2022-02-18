const express = require("express")
const app = express()
const PORT = 8000
const ejsLayout = require("express-ejs-layouts")

app.set("view engine", "ejs")
app.use(ejsLayout)

app.get("/", (req,res) => {
    res.render("index.ejs")
})
app.get("/water", (req,res) => {
    const waterTypes = ["Pisces", "Cancer", "Scorpio"]
    const traits = ["private", "mysterious", "psychic", "charming", "emotional", "sensitive"]
    res.render("water.ejs", {signs: waterTypes, traits: traits})
})
app.get("/earth", (req,res) => {
    const earthType = ["Tauras", "Virgo", "Capricorn"]
    const traits = ["grounded", "helpful", "practical", "realistic", "materialistic", "dependable"]
    res.render("earth.ejs", {signs: earthType, traits: traits})
})
app.get("/fire", (req,res) => {
    const fireType = ["Aries", "Leo", "Sagittarius"]
    const traits = ["passionate", "strong emotions", "temperamental", "energetic", "accomplished", "interesting"]
    res.render("fire.ejs", {signs: fireType, traits: traits})
})
app.get("/air", (req,res) => {
    const airType = ["Aquarius", "Gemini", "Libra"]
    const traits = ["movement", "creativity", "action", "adventure", "exciting", "easily provoked"]
    res.render("air.ejs", {signs: airType, traits: traits})
})

app.listen(PORT, () => {
    console.log(`Hello from Port ${PORT}`)
})