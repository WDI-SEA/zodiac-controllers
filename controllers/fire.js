const express = require('express')
const router = express.Router()

router.get('/', (req,res)=>{
    res.render('fire.ejs', {fireTraits: ['Passionate', 'Strong Emotions', 'Temperamental', 'Energetic', 'Accomplished', 'Interesting']})
})

router.get('/leo', (req,res)=>{
    const url = "https://www.thesun.co.uk/wp-content/uploads/2021/10/HOROSCOPE-LEO.png?w=750"
    const sign = 'leo'
    res.render('images.ejs', {url, sign})
})

router.get('/aries', (req,res)=>{
    const url = "https://www.thesun.co.uk/wp-content/uploads/2021/10/HOROSCOPE-ARIES.png?w=750"
    const sign = 'aries'
    res.render('images.ejs', {url, sign})
})

router.get('/sagittarius', (req,res)=>{
    const url = "https://www.thesun.co.uk/wp-content/uploads/2021/10/HOROSCOPE-SAGITTARIUS.png?w=750"
    const sign = 'sagittarius'
    res.render('images.ejs', {url, sign})
})

module.exports = router