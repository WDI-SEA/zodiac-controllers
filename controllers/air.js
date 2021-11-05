const express = require('express')
const router = express.Router()


router.get('/home', (req,res)=>{
    const air = ['movement','creative','action','adventure','exciting','easily provoked']
    const airSigns = ['Aquarius', 'Gemini', 'Libra']
    res.render('air/home.ejs', {air, airSigns})
})

router.get('/Aquarius', (req,res)=>{
    const air = ['movement','creative','action','adventure','exciting','easily provoked']
    const airSigns = ['Aquarius', 'Gemini', 'Libra']
    res.render('air/Aquarius.ejs', {air, airSigns})
})

router.get('/Gemini', (req,res)=>{
    const air = ['movement','creative','action','adventure','exciting','easily provoked']
    const airSigns = ['Aquarius', 'Gemini', 'Libra']
    res.render('air/Gemini.ejs', {air, airSigns})
})

router.get('/Libra', (req,res)=>{
    const air = ['movement','creative','action','adventure','exciting','easily provoked']
    const airSigns = ['Aquarius', 'Gemini', 'Libra']
    res.render('air/Libra.ejs', {air, airSigns})
})

module.exports = router