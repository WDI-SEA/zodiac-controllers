const express = require('express')
const router = express.Router()

const airSigns = ['Aquarius', 'Gemini', 'Libra']
const airTraits = ['movement', 'creativity', 'action', 'adventure', 'exciting', 'easily provoked']
router.get('/', (req, res)=>{
    res.render('air.ejs', {airSigns, airTraits})
})


router.get('/aquarius', (req, res)=>{
    res.render('air/aquarius.ejs')
})

router.get('/gemini', (req, res)=>{
    res.render('air/gemini.ejs')
})

router.get('/libra', (req, res)=>{
    res.render('air/libra.ejs')
})

// //export all routes in this file
module.exports = router