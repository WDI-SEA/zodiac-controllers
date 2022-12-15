const express = require('express')
const router = express.Router()
const path = require('path')

router.get('/', (req, res) => {
  res.render('air.ejs', {
    traits: [
      'movement',
      'creativity',
      'action',
      'adventure',
      'exciting',
      'easily provoked'
    ]
  })
})

router.get('/:sign', (req, res) => {
  const sign = req.params.sign
  res.sendFile(path.join(__dirname, ('../public/' + sign + '.png')))
})

module.exports = router
