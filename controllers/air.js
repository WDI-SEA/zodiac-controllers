const express = require('express')
const router = express.Router()

router.get('/air/aquarius', (req, res)=>{
    const airSigns = ['Aquarius', 'Gemini', 'Libra']
    const airTraits = ['movement', 'creativity', 'action', 'adventure', 'exciting', 'easily provoked']
    res.render('air.ejs', {airSigns, airTraits})
})

router.get('/air/gemini', (req, res)=>{
    const airSigns = ['Aquarius', 'Gemini', 'Libra']
    const airTraits = ['movement', 'creativity', 'action', 'adventure', 'exciting', 'easily provoked']
    res.render('air.ejs', {airSigns, airTraits})
})

router.get('/air/libra', (req, res)=>{
    const airSigns = ['Aquarius', 'Gemini', 'Libra']
    const airTraits = ['movement', 'creativity', 'action', 'adventure', 'exciting', 'easily provoked']
    res.render('air.ejs', {airSigns, airTraits})
})

module.exports = router