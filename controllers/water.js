// make an instance of express router
const express = require('express')
const router = express.Router()

//mount your routes on the router

router.get('/', (req,res) => {
    res.render('water.ejs', {
        signs: ['Pisces', 'Cancer', 'Scorpio'],
        traits: ['private', 'mysterious', 'psychic', 'charming', 'emotional', 'sensitive']
    })
})

router.get('/cancer', (req, res) => {
    res.render('signs.ejs')
})

router.get('/scorpio', (req, res) => {
    res.render('signs.ejs')
})

router.get('/pisces', (req, res) => {
    res.render('signs.ejs')
})

module.exports = router