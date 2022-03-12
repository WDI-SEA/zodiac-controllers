const express = require('express') //import express
const router = express.Router()


router.get('/', (req,res)=>{
    res.render('earth.ejs', {signs: ['taurus', 'virgo', 'capricorn'], earthArr: ['grounded','helpful','practical','realistic','materialistic','dependable']})
})

router.get('/taurus', (req,res)=>{
    res.render('image.ejs', {image: '/zodiac/taurus.png'})
})

router.get('/virgo', (req,res)=>{
    res.render('image.ejs', {image: '/zodiac/virgo.png'})
})

router.get('/capricorn', (req,res)=>{
    res.render('image.ejs', {image: '/zodiac/capricorn.png'})
})

module.exports = router