const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
  res.render("element", {
    element: "Water",
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

router.get("/aquarius", (req, res) => {
  res.render("sign", {
    sign: "aquarius",
  })
})

router.get("/gemini", (req, res) => {
  res.render("sign", {
    sign: "gemini",
  })
})

router.get("/libra", (req, res) => {
  res.render("sign", {
    sign: "libra",
  })
})

module.exports = router
