const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  const arrSigns = ['taurus','virgo','capricorn']
  const arrTraits = ['grounded','helpful','practical','realistic','materialistic','dependable']
  res.render('earth.ejs',{arrSigns,arrTraits})
})

router.get('/taurus', (req, res) => {
  res.render('earth/taurus.ejs')
})

router.get('/virgo', (req, res) => {
  res.render('earth/virgo.ejs')
})

router.get('/capricorn', (req, res) => {
  res.render('earth/capricorn.ejs')
})

module.exports = router