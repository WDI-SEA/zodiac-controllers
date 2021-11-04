const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
    const airTraits = ['movement', 'creativity', 'action', 'adventure', 'exciting', 'easily provoked']
    res.render('air/air.ejs', {airTraits: airTraits})
})
router.get('/aquarius', (req, res)=>{
    res.render('air/aquarius')
})
router.get('/gemini', (req, res)=>{
    res.render('air/gemini.ejs')
})
router.get('/libra', (req, res)=>{
    res.render('air/libra.ejs')
})

module.exports = router