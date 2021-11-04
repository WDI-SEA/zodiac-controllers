const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
    const waterTraits = ['private', 'mysterious', 'pyshic', 'charming', 'emotional', 'sensitive']
    res.render('water.ejs', {waterTraits: waterTraits})
})
router.get('/cancer', (req, res)=>{
    res.render('water/cancer.ejs')
})
router.get('/scorpio', (req, res)=>{
    res.render('water/scorpio.ejs')
})
router.get('/pisces', (req, res)=>{
    res.render('water/pisces.ejs')
})

module.exports = router