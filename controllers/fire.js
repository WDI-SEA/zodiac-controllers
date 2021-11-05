const express = require('express')
const router = express.Router()

const traits = ['Passionate', 'Strong Emotions', 'Temperamental', 'Energetic', 'Accomplished', 'Interesting']
const signs = ['Aries', 'Leo', 'Sagittarius']

router.get('/', function (req, res) {
    res.render('fire/fire.ejs', {traits: traits, signs: signs})
})

router.get('/aries', (req, res) => {
    res.render('fire/aries')
})

router.get('/leo', (req, res) => {
    res.render('fire/leo')
})

router.get('/sagittarius', (req, res) => {
    res.render('fire/sagittarius')
})

//export all routes in this file
module.exports = router