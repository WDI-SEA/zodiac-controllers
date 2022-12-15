const express = require('express')
const router = express.Router()
const path = require('path')

router.get('/', (req, res) => {
  res.render('earth.ejs', {
    traits: [
      'grounded',
      'helpful',
      'practical',
      'realistic',
      'materialistic',
      'dependable'
    ]
  })
})

router.get('/:sign', (req, res) => {
  const sign = req.params.sign
  res.sendFile(path.join(__dirname, ('../public/' + sign + '.png')))
})

module.exports = router
