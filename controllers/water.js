const express = require('express')

const router = express.Router()

router.get('/pisces', (req, res) => {

    res.render('partials/sign.ejs', { sign: 'pisces'})

    res.render('water.ejs', {
        element: 'water',
        signs: ['Pisces'],
        traits: ['Private', 'Mysterious', 'Psychic', 'Charming', 'Sensitive', 'Emotional']
    })
})

router.get('/cancer', (req, res) => {

    res.render('partials/sign.ejs', { sign: 'cancer'})

    res.render('water.ejs', {
        element: 'water',
        signs: ['Cancer'],
        traits: ['Private', 'Mysterious', 'Psychic', 'Charming', 'Sensitive', 'Emotional']
    })
})

router.get('/scorpio', (req, res) => {

    res.render('partials/sign.ejs', { sign: 'scorpio'})

    res.render('water.ejs', {
        element: 'water',
        signs: ['Scorpio'],
        traits: ['Private', 'Mysterious', 'Psychic', 'Charming', 'Sensitive', 'Emotional']
    })
})

module.exports = router