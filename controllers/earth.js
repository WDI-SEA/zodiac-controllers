const express = require('express')
const router = express.Router()

router.get('/earth/taurus', (req, res)=>{
    const earthSigns = ['Taurus', 'Virgo', 'Capricorn']
    const earthTraits = ['grounded', 'helpful', 'pratical', 'realistic', 'materialistic', 'dependable']
    res.render('earth.ejs', {earthSigns, earthTraits})
})

router.get('/earth/virgo', (req, res)=>{
    const earthSigns = ['Taurus', 'Virgo', 'Capricorn']
    const earthTraits = ['grounded', 'helpful', 'pratical', 'realistic', 'materialistic', 'dependable']
    res.render('earth.ejs', {earthSigns, earthTraits})
})

router.get('/earth/capricorn', (req, res)=>{
    const earthSigns = ['Taurus', 'Virgo', 'Capricorn']
    const earthTraits = ['grounded', 'helpful', 'pratical', 'realistic', 'materialistic', 'dependable']
    res.render('earth.ejs', {earthSigns, earthTraits})
})

module.exports = router