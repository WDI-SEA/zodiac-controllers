const express = require('express')
const router = express.Router()

router.get('/', (req,res) => {
    const waterDes = ['prive', 'mysterious', 'pyshic', 'charming', 'emotional', 'sensitive']
    res.render('water/water', {waterDescription: waterDes})
})

router.get('/cancer', (req,res) => {
    res.render('water/cancer')
})

router.get('/pisces', (req,res) => {
    res.render('water/pisces')
})

router.get('/scorpio', (req,res) => {
    res.render('water/scorpio')
})


module.exports = router