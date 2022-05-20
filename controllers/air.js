const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
  res.render("element", {
    element: "Air",
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

router.get("/pisces", (req, res) => {
  res.render("sign", {
    sign: "pisces",
  })
})

router.get("/cancer", (req, res) => {
  res.render("sign", {
    sign: "cancer",
  })
})

router.get("/scorpio", (req, res) => {
  res.render("sign", {
    sign: "scorpio",
  })
})

module.exports = router
