const Router = require('express')
const express = require('express')
const router = express.Router()

//routes go here
module.exports = router

//fire signs
router.get('/', (req, res)=>{
    const fireSigns =['Aries', 'Leo', 'Sagittarius']
    const fireSignsTraits = ['passionate', 'strong emotions', 'temperamental', 'energetic', 'accomplished', 'interesting']
    res.render('fire.ejs', {fireSignsKey: fireSigns, fireSignsTraitsKey: fireSignsTraits})
})

router.get('/Aries', (req, res)=>{
    const url = 'https://img.freepik.com/premium-vector/hand-drawn-flat-design-aries-logo_23-2149341996.jpg?w=996'
    res.render('image.ejs', {url: url})
})

router.get('/Leo', (req, res)=>{
    const url = 'https://img.freepik.com/premium-vector/hand-drawn-flat-design-leo-logo_23-2149341998.jpg?w=996'
    res.render('image.ejs', {url: url})
})

router.get('/Sagittarius', (req, res)=>{
    const url = 'https://img.freepik.com/premium-vector/hand-drawn-flat-design-sagittarius-logo_23-2149342001.jpg?w=996'
    res.render('image.ejs', {url: url})
})