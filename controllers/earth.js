const express = require('express')
const router = express.Router()

router.get('/', (req, res)=> {
    const earthSigns = ['Taurus', 'Virgo', 'Capricorn']
    const earthTraits = ['Grounded', 'Helpful', 'Practical', 'Realistic', 'Materialistic', 'Dependable']
    res.render('earth.ejs', {earthSigns, earthTraits})
})

router.get('/taurus', (req, res) => {
    res.render('earth/taurus.ejs')
})

router.get('/virgo', (req, res) => {
    res.render('earth/virgo.ejs')
})

router.get('/capricorn', (req, res) => {
    res.render('earth/capricorn.ejs')
})

module.exports = router