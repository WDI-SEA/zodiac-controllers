// make an instance of express router
const express = require('express')
const router = express.Router()

// mount routes on express router

// GET /leaveit/movies -- renders view of bad movies
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

router.get('/pisces', (req, res) => {
  res.sendFile(__dirname + 'pisces.png')
})

router.get('/cancer', (req, res) => {
  res.sendFile(__dirname + 'cancer.png')
})

router.get('/scorpio', (req, res) => {
  res.sendFile(__dirname + 'scorpio.png')
})

// export the router
module.exports = router
