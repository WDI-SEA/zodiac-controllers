const express = require('express')
const router = express.Router()

router.get('/cancer', (req, res) => {
    // Don't need to specify 'public' folder pathway because EJS automatically looks for a folder named 'public'
    res.render('displaySign.ejs', {sign: 'Cancer', imgSrc: '../img/cancer.png'})
})

router.get('/pisces', (req, res) => {
    res.render('displaySign.ejs', {sign: 'Pisces', imgSrc: '../img/pisces.png'})
})

router.get('/scorpio', (req, res) => {
    res.render('displaySign.ejs', {sign: 'Scorpio', imgSrc: '../img/scorpio.png'})
})

module.exports = router
