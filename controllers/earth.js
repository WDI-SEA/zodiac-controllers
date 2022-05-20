// import express
const express = require('express')
// create and express router
const router = express.Router()
// mount routes on the router
router.get('/', (req, res) =>{
    res.render('earth.ejs', {
        element: 'earth',
        signs: ['TAURUS', 'VIRGO', 'CAPRICORN'],
        traits: ['grounded', 'helpful', 'practical', 'realistic', 'materialistic', 'dependable']
    })
})
router.get('/taurus', (req, res)=>{
    
    res.render('imgs.ejs', {sign: 'taurus'})
})
router.get('/virgo', (req, res)=>{
    
    res.render('imgs.ejs', {sign: 'virgo'})
})
router.get('/capricorn', (req, res)=>{
    
    res.render('imgs.ejs', {sign: 'capricorn'})
})
// export the router
module.exports = router