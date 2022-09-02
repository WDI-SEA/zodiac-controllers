const express = require('express')
const router = express.Router()

router.get('/cancer', (req, res) => {
    res.render('water/cancer')
})

router.get('/scorpio', (req, res) => {
    res.render('water/scorpio')
})

router.get('/cancer', (req, res) => {
    res.render('water/cancer')
})

module.exports = router