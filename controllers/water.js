const express = require('express')
const router = express.Router()

router.get('/', (req, res)=> {
    const waterSigns = ['Pisces', 'Cancer', 'Scorpio']
    const waterTraits = ['Private', 'Mysterious', 'Pyshic', 'Charming', 'Emotional', 'Sensitive']
    res.render('water.ejs', {waterSigns, waterTraits})
})

router.get('/Cancer', (req, res) => {
    res.render('water/cancer.ejs')
})

router.get('/scorpio', (req, res) => {
    res.render('water/scorpio.ejs')
})

router.get('/pisces', (req, res) => {
    res.render('water/pisces.ejs')
})

module.exports = router