// import express
const express = require('express')

// create an express router
const router = express.Router()

// mount routes on the router
// fire
router.get('/', (req, res) => {
    const fireSigns = ['ARIES', 'LEO', 'SAGITTARIUS']
    const fireTraits = ['passionate', 'strong emotions', 'temperamental', 'energetic', 'accomplished', 'interesting']
    res.render('fire.ejs', {fireSigns, fireTraits})
})

router.get('/aries', (req, res) => {
    res.render('img.ejs', {sign: 'aries'})
})

router.get('/leo', (req, res) => {
    res.render('img.ejs', {sign: 'leo'})
})

router.get('/sagittarius', (req, res) => {
    res.render('img.ejs', {sign: 'sagittarius'})
})

// export the router
module.exports = router