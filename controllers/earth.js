const express = require('express')
const router = express.Router()

router.get('/', (req,res) => {
    const earthTraits = ['grounded', 'helpful', 'practical', 'realistic', 'materialistic', 'dependable']
    const earthSigns = ['TAURUS', 'VIRGO', 'CAPRICORN']
    res.render("earth.ejs", {earthTraits, earthSigns})
})

router.get('/taurus', (req, res) => {
    res.render('earth/taurus.ejs')
})

router.get('/capricorn', (req, res) => {
    res.render('earth/capricorn.ejs')
})

router.get('/virgo', (req, res) => {
    res.render('earth/virgo.ejs')
})

module.exports = router