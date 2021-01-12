const express = require('express')
const router = express.Router()

router.get('/aquarius', (req, res) => {
    res.render('aquarius.ejs')
})

router.get('/gemini', (req, res) => {
    res.render('gemini.ejs')
})

router.get('/libra', (req, res) => {
    res.render('libra.ejs')
})

module.exports = router