// make an instance of express router
const express = require('express')
const router = express.Router()

// mount your routes on the router

// GET /loveit/animals -- a view of favorite animals
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

router.get('/aquarius', (req, res) => {
  res.sendFile(__dirname + 'aquarius.png')
})

router.get('/gemini', (req, res) => {
  res.sendFile(__dirname + 'gemini.png')
})

router.get('/libra', (req, res) => {
  res.sendFile(__dirname + 'libra.png')
})

// export the router
module.exports = router
