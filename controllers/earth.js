const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
    const traits = ['Grounded', 'Helpful', 'Practical', 'Realistic', 'Materialistic', 'Dependable']
    const signs = ['Taurus', 'Virgo', 'Capricorn']
    res.render('earth/earth.ejs', {traits: traits, signs: signs})
})

router.get('/taurus', (req, res) => {
    res.render('earth/taurus')
})

router.get('/virgo', (req, res) => {
    res.render('earth/virgo')
})

router.get('/capricorn', (req, res) => {
    res.render('earth/capricorn')
})

//export all routes in this file
module.exports = router