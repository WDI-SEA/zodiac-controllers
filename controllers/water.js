const express = require('express')
const router = express.Router()

router.get('/home', (req,res)=>{
    const water = ['private','mysterious','pyshic','charming','emotional','sensitive']
    const waterSigns = ['Pisces', 'Cancer', 'Scorpio']
    res.render('water/home.ejs', {water, waterSigns})
})

router.get('/Pisces', (req,res)=>{
    const water = ['private','mysterious','pyshic','charming','emotional','sensitive']
    const waterSigns = ['Pisces', 'Cancer', 'Scorpio']
    res.render('water/Pisces.ejs', {water, waterSigns})
})

router.get('/Cancer', (req,res)=>{
    const water = ['private','mysterious','pyshic','charming','emotional','sensitive']
    const waterSigns = ['Pisces', 'Cancer', 'Scorpio']
    res.render('water/Cancer.ejs', {water, waterSigns})
})

router.get('/Scorpio', (req,res)=>{
    const water = ['private','mysterious','pyshic','charming','emotional','sensitive']
    const waterSigns = ['Pisces', 'Cancer', 'Scorpio']
    res.render('water/Scorpio.ejs', {water, waterSigns})
})

module.exports = router