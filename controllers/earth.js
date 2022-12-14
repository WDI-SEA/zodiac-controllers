const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    res.render('earth.ejs', {
        earth: ['Grounded', 'Helpful', 'Practical', 'Realistic', 'Materialistic', 'Dependable']
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