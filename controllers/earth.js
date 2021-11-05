const express = require('express')
const router = express.Router()

router.get('/home', (req,res)=>{
    const earth = ['grounded', 'helpful', 'practical', 'realistic', 'materialstic', 'dependable']
    const earthSigns = ['Taurus', 'Virgo', 'Capricorn']
    res.render('earth/home.ejs', {earth, earthSigns})
})

router.get('/Taurus', (req,res)=>{
    const earth = ['grounded', 'helpful', 'practical', 'realistic', 'materialstic', 'dependable']
    const earthSigns = ['Taurus', 'Virgo', 'Capricorn']
    res.render('earth/Taurus.ejs', {earth, earthSigns})
})

router.get('/Virgo', (req,res)=>{
    const earth = ['grounded', 'helpful', 'practical', 'realistic', 'materialstic', 'dependable']
    const earthSigns = ['Taurus', 'Virgo', 'Capricorn']
    res.render('earth/Virgo.ejs', {earth, earthSigns})
})

router.get('/Capricorn', (req,res)=>{
    const earth = ['grounded', 'helpful', 'practical', 'realistic', 'materialstic', 'dependable']
    const earthSigns = ['Taurus', 'Virgo', 'Capricorn']
    res.render('earth/Capricorn.ejs', {earth, earthSigns})
})

module.exports = router