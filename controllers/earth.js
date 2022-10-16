const express = require('express')
const router = express.Router()


router.get('/', (req,res)=>{
    res.render('earth.ejs', {earthTraits: ['Grounded', 'Helpful', 'Practical', 'Realistic', 'Materialistic', 'Dependable']})
})

router.get('/taurus', (req,res)=>{
    const url = "https://www.thesun.co.uk/wp-content/uploads/2021/10/HOROSCOPE-TAURUS.png?w=750"
    const sign = 'taurus'
    res.render('images.ejs', {url, sign})
})

router.get('/virgo', (req,res)=>{
    const url = "https://www.thesun.co.uk/wp-content/uploads/2021/10/HOROSCOPE-VIRGO.png?w=750"
    const sign = 'virgo'
    res.render('images.ejs', {url, sign})
})

router.get('/capricorn', (req,res)=>{
    const url = "https://www.thesun.co.uk/wp-content/uploads/2021/10/HOROSCOPE-CAPRICORN.png?w=750"
    const sign = 'capricorn'
    res.render('images.ejs', {url, sign})
})


module.exports = router