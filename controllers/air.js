const express = require('express')
const router = express.Router()

router.get('/gemini', (req, res) => {
  res.render('water/gemini.ejs')
})

router.get('/libra', (req, res) => {
  res.render('water/libra.ejs')
})

router.get('/aquarius', (req, res) => {
  res.render('water/aquarius.ejs')
})

module.exports = router