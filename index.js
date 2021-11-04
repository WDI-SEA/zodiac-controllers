const express = require("express")
const app = express()
const ejsLayouts = require("express-ejs-layouts")
app.set("view engine", "ejs")
app.use(ejsLayouts)

app.use("/air", require("./controllers/air"))
app.use("/water", require("./controllers/water"))
app.use("/fire", require("./controllers/fire"))
app.use("/earth", require("./controllers/earth"))

app.get("/", (req, res) => {
  res.render("home.ejs")
})

app.get("/water", (req, res) => {
  const waterSigns = ["Pisces", "Cancer", "Scorpio"]
  const waterTraits = [
    "private",
    "mysterious",
    "psychic",
    "charming",
    "emotional",
    "sensitive",
  ]
  res.render("water.ejs", { waterSigns, waterTraits })
})

app.get("/fire", (req, res) => {
  const fireSigns = ["Aries", "Leo", "Sagittarius"]
  const fireTraits = [
    "passionate",
    "strong emotions",
    "tempermental",
    "energetic",
    "accomplished",
    "interesting",
  ]
  res.render("fire.ejs", { fireSigns, fireTraits })
})

app.get("/air", (req, res) => {
  const airSigns = ["Aquarius", "Gemini", "Libra"]
  const airTraits = [
    "movement",
    "action",
    "adventure",
    "exciting",
    "easily provoked",
  ]
  res.render("air.ejs", { airSigns, airTraits })
})

app.get("/earth", (req, res) => {
  const earthSigns = ["Taurus", "Virgo", "Capricorn"]
  const earthTraits = [
    "grounded",
    "helpful",
    "practical",
    "realistic",
    "materialistic",
    "dependable",
  ]
  res.render("earth.ejs", { earthSigns, earthTraits })
})

app.listen(8000)
