const express = require('express')
const router = express.Router()

router.get('/', (req,res) => {
    const airTraits = ['movement', 'creativity', 'action', 'adventure', 'exciting', 'easily provoked']
    const airSigns = ['AQUARIUS', 'GEMINI', 'LIBRA']
    res.render("air.ejs", {airTraits, airSigns})
})

router.get('/aquarius', (req, res) => {
    res.render('air/aquarius.ejs')
})

router.get('/gemini', (req, res) => {
    res.render('air/gemini.ejs')
})

router.get('/libra', (req, res) => {
    res.render('air/libra.ejs')
})

module.exports = router