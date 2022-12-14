const express = require('express')
const router = express.Router()

//get /earth/
router.get('/', (req,res) => {
    res.render('earth.ejs', {
        signs: ['Taurus', 'Virgo', 'Capicorn'],
        traits: ['grounded', 'helpful', 'practical','realistic', 'materialistic', 'dependable']        
    })
})

//get /taurus
router.get('/taurus', (req,res) => {
    res.send('')
})

//get /virgo
router.get('/virgo', (req,res) => {
    res.render('')
})

//get /capicorn
router.get('/capicorn', (req,res) => {
    res.render('')
})

//export the router
module.exports = router