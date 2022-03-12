const express = require('express') //import express
const router = express.Router()


router.get('/', (req,res) =>{
    res.render('air.ejs', {signs: ['aquarius', 'gemini', 'libra'], airArr: ['movement','creativity','action','adventure','exciting','easily provoked']})
})


router.get('/aquarius', (req,res)=>{
    res.render('image.ejs', {image: '/zodiac/aquarius.png'})
})

router.get('/gemini', (req,res)=>{
    res.render('image.ejs', {image: '/zodiac/gemini.png'})
})

router.get('/libra', (req,res)=>{
    res.render('image.ejs', {image: '/zodiac/libra.png'})
})

module.exports = router