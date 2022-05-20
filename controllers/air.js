// import express
const express = require('express')

// create an express router
const router = express.Router()

// mount routes on the router
// air
router.get('/', (req, res) => {
    const airSigns = ['AQUARIUS', 'GEMINI', 'LIBRA']
    const airTraits = ['movement', 'creativity', 'action', 'adventure', 'exciting', 'easily provoked']
    res.render('air.ejs', {airSigns, airTraits})
})

router.get('/aquarius', (req, res) => {
    res.render('img.ejs', {sign: 'aquarius'})
})

router.get('/gemini', (req, res) => {
    res.render('img.ejs', {sign: 'gemini'})
})

router.get('/libra', (req, res) => {
    res.render('img.ejs', {sign: 'libra'})
})

// export the router
module.exports = router