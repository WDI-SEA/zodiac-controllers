const express = require('express')
const router = express.Router()

//get /fire/
router.get('/', (req,res) => {
    res.render('fire.ejs', {
        signs: ['Aries', 'Leo', 'Sagittarius'],
        traits: ['passionate','strong emotions', 'temperamental', 'energetic', 'accomplished', 'interesting']        
    })
})

//get /aries
router.get('/aries', (req,res) => {
    res.send('')
})

//get /leo
router.get('/leo', (req,res) => {
    res.send('')
})

//get /sagittarius
router.get('/sagittarius', (req,res) => {
    res.send('')
})

//export the router
module.exports = router