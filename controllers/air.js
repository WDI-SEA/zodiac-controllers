const express = require('express')
const router = express.Router()

router.get('/aquarius', (req, res) => {
    // Don't need to specify 'public' folder pathway because EJS automatically looks for a folder named 'public'
    res.render('displaySign.ejs', {sign: 'Aquarius', imgSrc: '../img/aquarius.png'})
})

router.get('/gemini', (req, res) => {
    res.render('displaySign.ejs', {sign: 'Gemini', imgSrc: '../img/gemini.png'})
})

router.get('/libra', (req, res) => {
    res.render('displaySign.ejs', {sign: 'Libra', imgSrc: '../img/libra.png'})
})

module.exports = router