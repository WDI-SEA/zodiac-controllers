const express = require('express')
const router = express.Router()
const path = require('path')

router.get('/', (req, res) => {
  res.render('water.ejs', {
    traits: [
      'private',
      'mysterious',
      'psychic',
      'charming',
      'emotional',
      'sensitive'
    ]
  })
})

router.get('/:sign', (req, res) => {
  const sign = req.params.sign
  res.sendFile(path.join(__dirname, ('../public/' + sign + '.png')))
})

module.exports = router
