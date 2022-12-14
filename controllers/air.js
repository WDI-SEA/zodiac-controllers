const express = require('express')
const router = express.Router()

//get /air/
router.get('/', (req,res) => {
    res.render('air.ejs', {
        signs: ['Aquarius', 'Gemini', 'Libra'], 
        traits: ['movement', 'creativity', 'action', 'adventure', 'exciting', 'easily provoked']        
    })
})

//get /aquarius
router.get('/aquarius', (req,res) => {
    res.send('aquarius.ejs')
})

//get /gemini
router.get('/gemini', (req,res) => {
    res.render('gemini.ejs')
})

//get /libra
router.get('/libra', (req,res) => {
    res.render('libra.ejs')
})

//export the router
module.exports = router