const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    const waterSigns = ['pisces', 'cancer', 'scorpio']
    const waterTraits = ['private', 'mysterious', 'psychic', 'charming', 'emotional', 'sensitive']
    res.render('water/water.ejs', {waterSigns, waterTraits})
})

router.get('/pisces', (req, res) => {
    res.render('water/pisces.ejs')
})

router.get('/cancer', (req, res) => {
    res.render('water/cancer.ejs')
})

router.get('/scorpio', (req, res) => {
    res.render('water/scorpio.ejs')
})

module.exports = router