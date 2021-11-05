const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
    const traits = ['Movement', 'Creativity', 'Action', 'Adventure', 'Exciting', 'Easily Provoked']
    const signs = ['Aquarius', 'Gemini', 'Libra']
    res.render('air/air.ejs', {traits: traits, signs: signs})
})

router.get('/aquarius', (req, res) => {
    res.render('air/aquarius')
})

router.get('/gemini', (req, res) => {
    res.render('air/gemini')
})

router.get('/libra', (req, res) => {
    const libra = []
    res.render('air/libra')
})

//export all routes in this file
module.exports = router