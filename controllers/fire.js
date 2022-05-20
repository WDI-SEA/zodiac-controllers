const express = require('express')

const router = express.Router()

router.get('/ares', (req, res) => {

    res.render('partials/sign.ejs', { sign: 'ares'})
    
    res.render('fire.ejs', {
        element: 'fire',
        signs: ['Ares'],
        traits: ['Passionate', 'Strong Emotion', 'Temperamental', 'Energetic', 'Interesting']
    })
})

router.get('/leo', (req, res) => {
    
    res.render('partials/sign.ejs', { sign: 'leo'})

    res.render('fire.ejs', {
        element: 'fire',
        signs: ['Leo'],
        traits: ['Passionate', 'Strong Emotion', 'Temperamental', 'Energetic', 'Interesting']
    })
})

router.get('/sagittarius', (req, res) => {

    res.render('partials/sign.ejs', { sign: 'sagittarius'})
    
    res.render('fire.ejs', {
        element: 'fire',
        signs: ['Sagittarius'],
        traits: ['Passionate', 'Strong Emotion', 'Temperamental', 'Energetic', 'Interesting']
    })
})

module.exports = router