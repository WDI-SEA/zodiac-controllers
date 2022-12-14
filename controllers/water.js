const express = require('express')
const router = express.Router()


//get /water/
router.get('/', (req,res) => {
    res.render('water.ejs', {
        signs: ['Pisces', 'Cancer', 'Scorpio'], 
        traits: ['private', 'mysterious', 'psychic', 'charming', 'emotional', 'sensitive']       
    })
})

//get /pisces
router.get('/pisces', (req,res) => {
    res.render('')
})

//get /cancer
router.get('/cancer', (req,res) => {
    res.render('')
})

//get /scorpio
router.get('/scorpio', (req,res) => {
    res.render('')
})


//export the router
module.exports = router