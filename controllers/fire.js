const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    res.render('fire.ejs', {
        fire: ['Passionate', 'Strong Emotions', 'Tempermental', 'Energetic', 'Accomplished', 'Interesting']
    })
})
router.get('/leo', (req, res) => {
    res.render('leo.ejs')
})
router.get('/aries', (req, res) => {
    res.render('aries.ejs')
})
router.get('/sagittarius', (req, res) => {
    res.render('sagittarius.ejs')
})

module.exports = router