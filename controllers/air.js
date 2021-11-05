const { Router } = require("express")
const express = require("express")
const router = express.Router()

router.get("/libra", (req, res) => {
  res.render("air/libra.ejs")
})

router.get("/gemini", (req, res) => {
  res.render("air/gemini.ejs")
})

router.get("/aquarius", (req, res) => {
  res.render("air/aquarius.ejs")
})

module.exports = router
