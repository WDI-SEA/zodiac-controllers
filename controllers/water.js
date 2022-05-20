// import express
const express = require('express')

// create an express router
const router = express.Router()

// mount routes on the router
// water
router.get('/', (req, res) => {
    const waterSigns = ['PISCES', 'CANCER', 'SCORPIO']
    const waterTraits = ['private', 'mysterious', 'pyschic', 'charming', 'emotional', 'sensitive']
    res.render('water.ejs', {waterSigns, waterTraits})
})

router.get('/pisces', (req, res) => {
    res.render('img.ejs', {sign: 'pisces'})
})

router.get('/cancer', (req, res) => {
    res.render('img.ejs', {sign: 'cancer'})
})

router.get('/scorpio', (req, res) => {
    res.render('img.ejs', {sign: 'scorpio'})
})

// export the router
module.exports = router