const express = require('express')
const router = express.Router()


const waterSigns = ['Pisces', 'Cancer', 'Scorpio']
const waterTraits = ['private', 'mysterious', 'psychic', 'charming', 'emotional', 'sensitive' ]
router.get('/', (req, res)=>{
    res.render('water.ejs', {waterSigns, waterTraits})
})

router.get('/cancer', (req, res)=>{
    res.render('water/cancer.ejs')
})

router.get('/pisces', (req, res)=>{
    res.render('water/pisces.ejs')
})

router.get('/scorpio', (req, res)=>{
    res.render('water/scorpio.ejs')
})

// //export all routes in this file
module.exports = router