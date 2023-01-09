const express = require('express')
const router = express.Router()
router.use(express.static('public'))


router.get('/', (req, res) => {
    res.render('water.ejs', {
        element: 'Water 💧',
        urlPrefix: 'water',
        signs: ['pisces', 'cancer', 'scorpio'],
        traits: ['private', 'mysterious', 'liquid', 'charming', 'emotional', 'sensitive']
    })
})

// this works sort of but not really
router.get('/scorpio', (req, res) => {
    res.render('water/scorpio', { sign: 'scorpio' })
  })
  
  router.get('/cancer', (req, res) => {
    res.render('water/cancer', { sign: 'cancer' })
  })
  
  router.get('/pisces', (req, res) => {
    res.render('water/pisces', { sign: 'pisces' })
  })
  

module.exports = router