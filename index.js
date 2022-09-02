const express = require("express")
const app = express()
const PORT = 3000
app.set("view engine", "ejs")

const airSigns = ["Aquarius", "Gemini", "Libra"]
const airTraits = ["movement", "creativity", "action", "adventure", "exciting", "easily provoked"]

const waterSigns = ["Pisces", "Cancer", "Scorpio"]
const waterTraits = ["private", "mysterious", "pyshic", "charming", "emotional", "sensitive"]

const fireSigns = ["Aries", "Leo", "Sagittarius"]
const fireTraits = ["passionate", "strong emotions", "temperamental", "energetic", "accomplished", "interesting"]

const earthSigns = ["Taurus", "Virgo", "Capricorn"]
const earthTraits = ["grounded", "helpful", "practical", "realistic", "materialistic", "dependable"]


app.get("/", (req, res) => {
    res.render("index")
})

app.get("/water", (req, res) => {
    res.render("water", { signs: waterSigns, traits: waterTraits })
})

app.get("/air", (req, res) => {
    res.render("air", { signs: airSigns, traits: airTraits })
})
app.get("/fire", (req, res) => {
    res.render("fire", { signs: fireSigns, traits: fireTraits })
})
app.get("/earth", (req, res) => {
    res.render("earth", { signs: earthSigns, traits: earthTraits })
})


app.listen(PORT, () => {
    console.log(`server is running on PORT ${PORT}`)
})