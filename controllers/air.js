const express = require('express')
const router = express.Router()

router.get('/libra', (req, res) => {
    // Part 1-Lab
    // const airSigns = ['Aquarius', 'Gemini', 'Libra']
    // const airTraits = ['Movement', 'Creativity', 'Action', 'Adventure', 'Exciting', 'Easily Provoked']
    //Part 2-Deliverable
    res.render('air/libra.ejs')
})

router.get('/aquarius', (req, res) => {
    // const airSigns = ['Aquarius', 'Gemini', 'Libra']
    // const airTraits = ['Movement', 'Creativity', 'Action', 'Adventure', 'Exciting', 'Easily Provoked']
    res.render('air/aquarius.ejs')
})

router.get('/gemini', (req, res) => {
    // const airSigns = ['Aquarius', 'Gemini', 'Libra']
    // const airTraits = ['Movement', 'Creativity', 'Action', 'Adventure', 'Exciting', 'Easily Provoked']
    res.render('air/gemini.ejs')
})

module.exports = router