const Router = require('express')
const express = require('express')
const router = express.Router()

//routes go here
module.exports = router

//earth signs
router.get('/', (req, res)=>{
    const earthSigns =['Taurus', 'Virgo', 'Capricorn']
    const earthSignsTraits = ['grounded', 'helpful', 'practical', 'realistic', 'materialistic', 'dependable']
    res.render('earth.ejs', {earthSignsKey: earthSigns, earthSignsTraitsKey: earthSignsTraits})
})


router.get('/Taurus', (req, res)=>{
    const url = 'https://img.freepik.com/premium-vector/hand-drawn-flat-design-taurus-logo_23-2149341992.jpg'
    res.render('image.ejs', {url: url})
})

router.get('/Virgo', (req, res)=>{
    const url = 'https://img.freepik.com/premium-vector/hand-drawn-flat-design-virgo-logo_23-2149341999.jpg?w=996'
    res.render('image.ejs', {url: url})
})

router.get('/Capricorn', (req, res)=>{
    const url = 'https://img.freepik.com/premium-vector/hand-drawn-flat-design-capricorn-logo_23-2149342003.jpg?w=996'
    res.render('image.ejs', {url: url})
})