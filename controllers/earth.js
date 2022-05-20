// import express
const express = require('express')

// create an express router
const router = express.Router()

// mount routes on the router
// earth
router.get('/', (req, res) => {
    const earthSigns = ['TAURUS', 'VIRGO', 'CAPRICORN']
    const earthTraits = ['grounded', 'helpful', 'practical', 'realistic', 'materialistic', 'dependable']
    res.render('earth.ejs', {earthSigns, earthTraits})
})

router.get('/taurus', (req, res) => {
    res.render('img.ejs', {sign: 'taurus'})
})

router.get('/virgo', (req, res) => {
    res.render('img.ejs', {sign: 'virgo'})
})

router.get('/capricorn', (req, res) => {
    res.render('img.ejs', {sign: 'capricorn'})
})

// export the router
module.exports = router