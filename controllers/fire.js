const express = require('express')
const router = express.Router()

router.get('/aries', (req, res) => {
    // Don't need to specify 'public' folder pathway because EJS automatically looks for a folder named 'public'
    res.render('displaySign.ejs', {sign: 'Aries', imgSrc: '../img/aries.png'})
})

router.get('/leo', (req, res) => {
    res.render('displaySign.ejs', {sign: 'Leo', imgSrc: '../img/leo.png'})
})

router.get('/sagittarius', (req, res) => {
    res.render('displaySign.ejs', {sign: 'Sagittarius', imgSrc: '../img/sagittarius.png'})
})

module.exports = router