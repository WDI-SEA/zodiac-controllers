const Router = require('express')
const express = require('express')
const router = express.Router()

//routes go here
module.exports = router

//water signs
router.get('/', (req, res)=>{
    const waterSigns =['Pisces', 'Cancer', 'Scorpio']
    const waterSignsTraits = ['private', 'mysterious', 'pyshic', 'charming', 'emotional', 'sensitive']
    res.render('water.ejs', {waterSignsKey: waterSigns, waterSignsTraitsKey: waterSignsTraits})
})


router.get('/Pisces', (req, res)=>{
    const url = 'https://img.freepik.com/premium-vector/hand-drawn-flat-design-pisces-logo_23-2149341995.jpg?w=996'
    res.render('image.ejs', {url: url})
})


router.get('/Cancer', (req, res)=>{
    const url = 'https://img.freepik.com/premium-vector/hand-drawn-flat-design-cancer-logo_23-2149341997.jpg?w=996'
    res.render('image.ejs', {url: url})
})

router.get('/Scorpio', (req, res)=>{
    const url = 'https://img.freepik.com/premium-vector/hand-drawn-flat-design-scorpio-logo_23-2149341994.jpg?w=996'
    res.render('image.ejs', {url: url})
})
