const express = require('express')
const router = express.Router()

const traits = ['Private', 'Mysterious', 'Psychic', 'Charming', 'Emotional', 'Sensitive']
const signs = ['Pisces', 'Cancer', 'Scorpio']

router.get('/', function (req, res) {
    res.render('water/water.ejs', {traits: traits, signs: signs})
})

router.get('/pisces', (req, res) => {
    res.render('water/pisces')
})

router.get('/cancer', (req, res) => {
    res.render('water/cancer')
})

router.get('/scorpio', (req, res) => {
    res.render('water/scorpio')
})

//export all routes in this file
module.exports = router