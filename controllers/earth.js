const express = require('express')
const router = express.Router()

router.get('/earth', (req, res) => {
    const earthSigns = ['Taurus', 'Virgo', 'Capricorn']
    const earth = ['grounded', 'helpful', 'practical', 'realistic', 'materialistic', 'dependable']
    res.render('elements/earth.ejs', {earth,earthSigns})
})

router.get('/earth/taurus', (req,res) => {
    res.render('elements/signsImages/taurus.ejs')
})
router.get('/earth/virgo', (req,res) => {
    res.render('elements/signsImages/virgo.ejs')
})
router.get('/earth/capricorn', (req,res) => {
    res.render('elements/signsImages/capricorn.ejs')
})

module.exports = router