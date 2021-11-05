const express = require('express')
const router = express.Router()

router.get('/air', (req, res) => {
    const airSigns = ['Aquarius', 'Gemini', 'Libra']
    const air = ['movement', 'creativity', 'action', 'adventure', 'exciting', 'easily provoked']
    res.render('elements/air.ejs', {air,airSigns})
})

router.get('/air/gemini', (req,res) => {
    res.render('elements/signsImages/gemini.ejs')
})

router.get('/air/aquarius', (req,res) => {
    res.render('elements/signsImages/aquarius.ejs')
})

router.get('/air/libra', (req,res) => {
    res.render('elements/signsImages/libra.ejs')
})



module.exports = router