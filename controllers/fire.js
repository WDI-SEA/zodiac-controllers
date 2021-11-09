const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  const arrSigns = ['leo','aries','sagittarius']
  const arrTraits = ['passionate','energetic','strong emotions','temperamental','accomplished','interesting']
  res.render('fire.ejs',{arrSigns,arrTraits})
})

router.get('/leo', (req, res) => {
  res.render('fire/leo.ejs')
})

router.get('/aries', (req, res) => {
  res.render('fire/aries.ejs')
})

router.get('/sagittarius', (req, res) => {
  res.render('fire/sagittarius.ejs')
})

module.exports = router