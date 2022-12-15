// make an instance of express router
const express = require('express')
const router = express.Router()

// mount routes on express router

// GET /leaveit/movies -- renders view of bad movies
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
  res.sendFile('/home/cephandrius/seir-1114/unit2/zodiac-controllers/public/' + sign + '.png')
})

// export the router
module.exports = router
