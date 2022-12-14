const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('earth.ejs', {
        signs:['Taurus', 'Virgo', 'Capricorn'],
        traits:['grounded', 'helpful', 'practical', 'realistic', 'dependable']
    })
})
router.get('/taurus', (req, res) => {
    res.render('signs.ejs')
})
router.get('/virgo', (req, res) => {
    res.render('signs.ejs')
})
router.get('/capricorn', (req, res) => {
    res.render('signs.ejs')
})

module.exports = router