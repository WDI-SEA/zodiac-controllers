const express = require('express')
const router = express.Router()

router.get('/capricorn', (req, res) => {
    // Don't need to specify 'public' folder pathway because EJS automatically looks for a folder named 'public'
    res.render('displaySign.ejs', {sign: 'Capricorn', imgSrc: '../img/capricorn.png'})
})

router.get('/virgo', (req, res) => {
    res.render('displaySign.ejs', {sign: 'Virgo', imgSrc: '../img/virgo.png'})
})

router.get('/taurus', (req, res) => {
    res.render('displaySign.ejs', {sign: 'Taurus', imgSrc: '../img/taurus.png'})
})

module.exports = router
