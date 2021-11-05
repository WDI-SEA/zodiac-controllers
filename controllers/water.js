const express = require('express')
const router = express.Router()

router.get('/water', (req, res) => {
    const waterSigns = ['Pisces', 'Cancer', 'Scorpio']
    const water = ['private', 'mysterious', 'psychic', 'charming', 'emotional', 'sensitive']
    res.render('elements/water.ejs', {water, waterSigns})
})

router.get('/water/pisces', (req,res) => {
    res.render('elements/signsImages/pisces.ejs')
})
router.get('/water/cancer', (req,res) => {
    res.render('elements/signsImages/cancer.ejs')
})
router.get('/water/scorpio', (req,res) => {
    res.render('elements/signsImages/scorpio.ejs')
})

module.exports = router