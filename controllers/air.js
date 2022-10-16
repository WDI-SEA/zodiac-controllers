const express = require('express')
const router = express.Router()

router.get('/', (req,res)=>{
    res.render('air.ejs', {airTraits: ['Movement', 'Creativity', 'Action', 'Adventure', 'Exciting', 'Easily Provocked']})
})

router.get('/gemini', (req,res)=>{
    res.render('gemini.ejs')
})

router.get('/libra', (req,res)=>{
    res.render('libra.ejs')
})

router.get('/aquarius', (req,res)=>{
    res.render('aquarius.ejs')
})

module.exports = router