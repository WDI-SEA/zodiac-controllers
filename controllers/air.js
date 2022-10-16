const express = require('express')
const router = express.Router()

router.get('/', (req,res)=>{
    res.render('air.ejs', {airTraits: ['Movement', 'Creativity', 'Action', 'Adventure', 'Exciting', 'Easily Provocked']})
})

router.get('/gemini', (req,res)=>{
    const url = "https://www.thesun.co.uk/wp-content/uploads/2021/10/HOROSCOPE-GEMINI.png?w=750"
    const sign = 'gemini'
    res.render('images.ejs', {url, sign})
})

router.get('/libra', (req,res)=>{
    const url = "https://www.thesun.co.uk/wp-content/uploads/2021/10/HOROSCOPE-LIBRA.png?strip=all&w=960"
    const sign = 'libra'
    res.render('images.ejs', {url, sign})
})

router.get('/aquarius', (req,res)=>{
    const url = "https://www.thesun.co.uk/wp-content/uploads/2021/10/HOROSCOPE-AQUARIUS.png?w=750"
    const sign = 'aquarius'
    res.render('images.ejs', {url, sign})
})

module.exports = router