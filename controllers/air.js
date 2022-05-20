// import express
const express = require('express')
// create and express router
const router = express.Router()
// mount routes on the router
router.get('/', (req, res) =>{
    res.render('air.ejs', {
        element: 'Air',
        signs: ['AQUARIUS', 'GEMINI', 'LIBRA'],
        traits: ['movement', 'creativity', 'action', 'adventure', 'exciting', 'easily provoked']
    })
})
router.get('/aquarius', (req, res)=>{
    res.render('imgs.ejs', {sign: 'aquarius'})
})
router.get('/gemini', (req, res)=>{
    res.render('imgs.ejs', {sign: 'gemini'})
})
router.get('/libra', (req, res)=>{
    res.render('imgs.ejs', {sign: 'libra'})
})
// export the router
module.exports = router