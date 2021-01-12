const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    let airSigns = ['Aquarius', 'Gemini','Libra']
    let airTraits = ['Movement', 'Creativity', 'Action', 'Adventure', 'Exciting', 'Easily Provoked']
    res.render('elementDisplay', {signs: airSigns, traits: airTraits})
})

router.get('/aquarius', (req, res)=>{
    res.render('aquarius.ejs')
})

router.get('/gemini', (req, res)=>{
    res.render('gemini.ejs')
})

router.get('/libra', (req, res)=>{
    res.render('libra.ejs')
})


module.exports = router