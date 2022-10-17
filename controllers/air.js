const Router = require('express')
const express = require('express')
const router = express.Router()

//routes go here
module.exports = router

//air signs
router.get('/', (req, res)=>{
    const airSigns =['Aquarius', 'Gemini', 'Libra']
    const airSignsTraits = ['movement', 'creativity', 'action', 'adventure', 'exciting', 'easily provoked']
    res.render('air.ejs', {airSignsKey: airSigns, airSignsTraitsKey: airSignsTraits})
})

router.get('/Aquarius', (req, res)=>{
    const url = 'https://img.freepik.com/premium-vector/hand-drawn-flat-design-aquarius-logo_23-2149342007.jpg?w=996'
    res.render('image.ejs', {url: url})
})

router.get('/Gemini', (req, res)=>{
    const url = 'https://img.freepik.com/premium-vector/hand-drawn-flat-design-gemini-logo_23-2149341993.jpg?w=996'
    res.render('image.ejs', {url: url})
})

router.get('/Libra', (req, res)=>{
    const url = 'https://img.freepik.com/premium-vector/hand-drawn-flat-design-libra-logo_23-2149342000.jpg?w=996'
    res.render('image.ejs', {url: url})
})


