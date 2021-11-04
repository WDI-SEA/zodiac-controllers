const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    const airSigns = ['aquarius', 'gemini', 'libra']
    const airTraits = ['movement', 'creativity', 'action', 'adventure', 'exciting', 'easily provoked']
    res.render('air', {airSigns, airTraits})
})

router.get('/gemini', (req, res) => {
    res.render('gemini.ejs')
})

router.get('/libra', (req, res) => {
    res.render('libra.ejs')
})

router.get('/aquarius', (req, res) => {
    res.render('aquarius.ejs')
})

module.exports = router