const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('fire.ejs', {
        signs: ['Aries', 'Leo', 'Sagittarius'],
        traits: ['Passionate', 'Strong Emotions', 'Temperamental', 'Energetic', 'Accomplished', 'Interesting']
    })
})

router.get('/aries', (req, res) => {
    res.render('aries.ejs', {
        traits: ['Passionate', 'Strong Emotions', 'Temperamental', 'Energetic', 'Accomplished', 'Interesting']
    })
})

router.get('/leo', (req, res) => {
    res.render('leo.ejs', {
        traits: ['Passionate', 'Strong Emotions', 'Temperamental', 'Energetic', 'Accomplished', 'Interesting']
    })
})

router.get('/sagittarius', (req, res) => {
    res.render('sagittarius.ejs', {
        traits: ['Passionate', 'Strong Emotions', 'Temperamental', 'Energetic', 'Accomplished', 'Interesting']
    })
})

module.exports = router;