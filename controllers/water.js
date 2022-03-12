const express = require('express') //import express
const router = express.Router()



router.get('/', (req,res)=>{
    res.render('water.ejs', {signs: ['pisces', 'cancer', 'scorpio'], waterArr: ['private','mysterious','psychic','charming','emotional','sensitive']})
})


router.get('/cancer', (req,res)=>{
    res.render('image.ejs', {image: '/zodiac/cancer.png'})
})

router.get('/scorpio', (req,res)=>{
    res.render('image.ejs', {image: '/zodiac/scorpio.png'})
})

router.get('/pisces', (req,res)=>{
    res.render('image.ejs', {image: '/zodiac/pisces.png'})
})

module.exports = router