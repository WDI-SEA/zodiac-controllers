const express = require('express')
const router = express.Router()

const earthSigns = ['Taurus', 'Virgo', 'Capricorn']
const earthTraits = ['grounded', 'helpful', 'practical', 'realistic', 'materialistic', 'dependable']
router.get('/', (req, res)=>{
    res.render('earth.ejs', {earthSigns, earthTraits})
})


router.get('/capricorn', (req, res)=>{
    res.render('earth/capricorn.ejs')
})

router.get('/taurus', (req, res)=>{
    res.render('earth/taurus.ejs')
})

router.get('/virgo', (req, res)=>{
    res.render('earth/virgo.ejs')
})

// //export all routes in this file
module.exports = router