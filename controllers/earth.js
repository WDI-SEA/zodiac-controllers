const express = require('express')
const router = express.Router()

router.get('/tarus', (req, res) => {
    res.render('earth/tarus.ejs')
})

router.get('/virgo', (req, res) => {
    res.render('earth/virgo.ejs')
})

router.get('/capricorn', (req, res) => {
    res.render('earth/capricorn.ejs')
})

module.exports = router