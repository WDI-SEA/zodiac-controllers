// make an instance of express router
const express = require('express')
const router = express.Router()

// mount routes on express router

// GET /leaveit/movies -- renders view of bad movies
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

router.get('/aries', (req, res) => {
  res.sendFile(__dirname + 'aries.png')
})

router.get('/leo', (req, res) => {
  res.sendFile(__dirname + 'leo.png')
})

router.get('/sagittarius', (req, res) => {
  res.sendFile(__dirname + 'sagittarius.png')
})

// export the router
module.exports = router
