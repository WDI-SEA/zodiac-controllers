const express = require('express')
const router = express.Router()

router.get('/cancer', (req, res) => {
    res.render('cancer.ejs')
})

router.get('/scorpio', (req, res) => {
    res.render('scorpio.ejs')
})

router.get('/pisces', (req, res) => {
    res.render('pisces.ejs')
})

module.exports = router