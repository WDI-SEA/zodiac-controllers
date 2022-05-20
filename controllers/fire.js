const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
  res.render("element", {
    element: "Fire",
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

router.get("/aries", (req, res) => {
  res.render("sign", {
    sign: "aries",
  })
})

router.get("/leo", (req, res) => {
  res.render("sign", {
    sign: "leo",
  })
})

router.get("/sagittarius", (req, res) => {
  res.render("sign", {
    sign: "sagittarius",
  })
})

module.exports = router
