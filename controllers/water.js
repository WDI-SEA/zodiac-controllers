const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    res.render('water.ejs', {
        water: ['Private', 'Mysterious', 'Psychic', 'Charming', 'Emotional', 'Sensitive']
    })
})
router.get('/cancer', (req, res) => {
    res.render('cancer.ejs')
})
router.get('/scorpio', (req, res) => {
    res.render('scorpio.ejs')
})
router.get('/pisces', (req, res) => {
    res.render('pisces.ejs')
})

module.exports = router