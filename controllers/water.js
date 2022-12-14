const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('water.ejs', {
        signs: ['Pisces', 'Cancer', 'Scorpio'],
        traits: ['private', 'mysterious', 'pyschic', 'charming', 'emotional', 'sensitive']
    })
})
router.get('/pisces', (req, res) => {
    res.render('signs.ejs')
})
router.get('/cancer', (req, res) => {
    res.render('signs.ejs')
})
router.get('/scorpio', (req, res) => {
    res.render('signs.ejs')
})

module.exports = router