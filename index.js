const ejsLayouts = require("express-ejs-layouts")
const express = require("express")

const app = express()
const PORT = 3000

app.set("view engine", "ejs")

app.use(express.static("Public"))
app.use(ejsLayouts)

app.get("/", (req, res) => {
  res.render("index")
})

app.get("/water", (req, res) => {
  res.render("sign", {
    title: "Water",
    signs: ["Aquarius", "Gemini", "Libra"],
    traits: [
      "movement",
      "creativity",
      "action",
      "adventure",
      "exciting",
      "easily provoked",
    ],
  })
})

app.get("/air", (req, res) => {
  res.render("sign", {
    title: "Air",
    signs: ["Pisces", "Cancer", "Scorpio"],
    traits: [
      "private",
      "mysterious",
      "pyshic",
      "charming",
      "emotional",
      "sensitive",
    ],
  })
})

app.get("/fire", (req, res) => {
  res.render("sign", {
    title: "Fire",
    signs: ["Aries", "Leo", "Sagittarius"],
    traits: [
      "passionate",
      "strong emotions",
      "temperamental",
      "energetic",
      "accomplished",
      "interesting",
    ],
  })
})

app.get("/earth", (req, res) => {
  res.render("sign", {
    title: "Earth",
    signs: ["Taurus", "Virgo", "Capricorn"],
    traits: [
      "grounded",
      "helpful",
      "practical",
      "realistic",
      "materialistic",
      "dependable",
    ],
  })
})

app.listen(PORT, () => console.log(`Active on localhost:${PORT}`))
