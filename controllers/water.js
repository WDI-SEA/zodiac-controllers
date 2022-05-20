// import express
const express = require('express')
// create and express router
const router = express.Router()

// mount routes on the router
router.get('/', (req, res) =>{
    res.render('water.ejs', {
        element: 'Water',
        signs: ['PISCES', 'CANCER', 'SCORPIO'],
        traits: ['private', 'mysterious', 'psychic', 'charming', 'emo']
    })
})
router.get('/pisces', (req, res)=>{
    res.render('imgs.ejs', {sign: 'pisces'})
})
router.get('/cancer', (req, res)=>{
    res.render('imgs.ejs', {sign: 'cancer'})
})
router.get('/scorpio', (req, res)=>{
    res.render('imgs.ejs', {sign: 'scorpio'})
})
// export the router
module.exports = router