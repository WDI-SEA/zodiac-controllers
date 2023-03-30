const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('earth.ejs', {
        signs: ['Taurus', 'Virgo', 'Capricorn'],
        traits: ['Grounded', 'Helpful', 'Pratical', 'Realistic', 'Materialistic', 'Dependable']
    })
})

router.get('/taurus', (req, res) => {
    res.render('taurus.ejs', {
        traits: ['Grounded', 'Helpful', 'Pratical', 'Realistic', 'Materialistic', 'Dependable']
    })
})

router.get('/virgo', (req, res) => {
    res.render('virgo.ejs', {
        traits: ['Grounded', 'Helpful', 'Pratical', 'Realistic', 'Materialistic', 'Dependable']
    })
})

router.get('/capricorn', (req, res) => {
    res.render('capricorn.ejs', {
        traits: ['Grounded', 'Helpful', 'Pratical', 'Realistic', 'Materialistic', 'Dependable']
    })
})

module.exports = router;

