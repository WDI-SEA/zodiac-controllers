const express = require('express')

const router = express.Router()

router.get('/taurus', (req, res) => {
    
    res.render('partials/sign.ejs', { sign: 'taurus'})

    res.render('earth.ejs', {
        element: 'earth',
        signs: ['Taurus'],
        traits: ['Grounded', 'Helpful', 'Practical', 'Realistic', 'Materialistic']
    })
})

router.get('/virgo', (req, res) => {
    
    res.render('partials/sign.ejs', { sign: 'virgo'})

    res.render('earth.ejs', {
        element: 'earth',
        signs: ['Virgo'],
        traits: ['Grounded', 'Helpful', 'Practical', 'Realistic', 'Materialistic']
    })
})

router.get('/capricorn', (req, res) => {

    res.render('partials/sign.ejs', { sign: 'capricorn'})
    
    res.render('earth.ejs', {
        element: 'earth',
        signs: ['Capricorn'],
        traits: ['Grounded', 'Helpful', 'Practical', 'Realistic', 'Materialistic']
    })
})

module.exports = router