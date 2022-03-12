const express = require('express') //import express
const router = express.Router()

router.get('/', (req,res)=>{
    res.render('fire.ejs', {signs: ['aries', 'leo', 'sagittarius'], fireArr: ['passionate','strong emotions','temperamental','energetic','accomplished','interesting']})
})

router.get('/leo', (req,res)=>{
    res.render('image.ejs', {image: '/zodiac/leo.png'})
})

router.get('/aries', (req,res)=>{
    res.render('image.ejs', {image: '/zodiac/aries.png'})
})

router.get('/sagitarrius', (req,res)=>{
    res.render('image.ejs', {image: '/zodiac/sagitarrius.png'})
})

module.exports = router