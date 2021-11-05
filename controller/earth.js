const express = require('express')
const router = express.Router()

router.get('/taurus', (req, res) =>{
    res.render('earth/taurus.ejs')
})

router.get('/virgo', (req, res) =>{
    res.render('earth/virgo.ejs')
})

router.get('/capricorn', (req, res) =>{
    res.render('earth/capricorn.ejs')
})

module.exports = router