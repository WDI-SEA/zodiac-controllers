const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('fire.ejs', {
    traits: [
      'passionate',
      'strong emotions',
      'temperamental',
      'energetic',
      'accomplished',
      'interesting'
    ]
  })
})

router.get('/:sign', (req, res) => {
  const sign = req.params.sign
  res.sendFile('/home/cephandrius/seir-1114/unit2/zodiac-controllers/public/' + sign + '.png')
})

module.exports = router
