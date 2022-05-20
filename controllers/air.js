const express = require('express')

const router = express.Router()

router.get('/aquarius', (req, res) => {

    res.render('partials/sign.ejs', { sign: 'aquarius'})

    res.render('air.ejs', {
        element: 'air',
        signs: ['Aquarius'],
        traits: ['Movement', 'Creativity', 'Action', 'Adventure', 'Exciting']
    })
})

router.get('/gemini', (req, res) => {
    
    res.render('partials/sign.ejs', { sign: 'gemini'})

    res.render('air.ejs', {
        element: 'air',
        signs: ['Gemini'],
        traits: ['Movement', 'Creativity', 'Action', 'Adventure', 'Exciting']
    })
})

router.get('/libra', (req, res) => {
    
    res.render('partials/sign.ejs', { sign: 'libra'})

    res.render('air.ejs', {
        element: 'air',
        signs: ['Libra'],
        traits: ['Movement', 'Creativity', 'Action', 'Adventure', 'Exciting']
    })
})


module.exports = router