const express = require('express')
const router = express.Router()

router.get('/', (req,res) => {
    const earthDes = ['grounded', 'helpoful', 'practical', 'realistic', 'materialistic', 'dependable']
    res.render('earth/earth', {earthDescription: earthDes})
})

router.get('/taurus', (req,res) => {
    res.render('earth/taurus')
})

router.get('/virgo', (req,res) => {
    res.render('earth/virgo')
})

router.get('/capricorn', (req,res) => {
    res.render('earth/capricorn')
})


module.exports = router