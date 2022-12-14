// make an instance of express router
const express = require('express')
const router = express.Router()

//mount your routes on the router
router.get('/', (req,res) => {
    // res.send('earth works!')
    res.render('earth.ejs', {
        signs: ['Taurus', 'Virgo', 'Capricorn'],
        traits: ['grounded', 'helpful', 'practical', 'realistic', 'materialistic', 'dependable']
    })
})

router.get('/taurus', (req, res) => {
    res.render('taurus.ejs')
})

router.get('/virgo', (req, res) => {
    res.render('virgo.ejs')
})

router.get('/capricorn', (req, res) => {
    res.render('capricorn.ejs')
})

module.exports = router