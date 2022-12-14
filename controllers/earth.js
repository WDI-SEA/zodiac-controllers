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

router.get('/taurus', (req, res) => {
  res.sendFile(__dirname + 'taurus.png')
})

router.get('/virgo', (req, res) => {
  res.sendFile(__dirname + 'virgo.png')
})

router.get('/capricorn', (req, res) => {
  res.sendFile(__dirname + 'capricorn.png')
})

// export the router
module.exports = router
