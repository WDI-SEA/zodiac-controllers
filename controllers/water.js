const { Router } = require("express")
const express = require("express")
const router = express.Router()

router.get("/cancer", (req, res) => {
  res.render("water/cancer.ejs")
})

router.get("/scorpio", (req, res) => {
  res.render("water/scorpio.ejs")
})

router.get("/pisces", (req, res) => {
  res.render("water/pisces.ejs")
})

module.exports = router
