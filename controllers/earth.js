const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
  res.render("element", {
    element: "Earth",
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

router.get("/taurus", (req, res) => {
  res.render("sign", {
    sign: "taurus",
  })
})

router.get("/virgo", (req, res) => {
  res.render("sign", {
    sign: "virgo",
  })
})

router.get("/capricorn", (req, res) => {
  res.render("sign", {
    sign: "capricorn",
  })
})

module.exports = router
