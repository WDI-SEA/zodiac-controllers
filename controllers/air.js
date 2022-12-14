const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('air.ejs', {
        signs: ['Aquarius', 'Gemini', 'Libra'],
        traits: ['movement', 'creativity', 'action', 'adventure', 'exciting', 'easily provoked']
    })
})
router.get('/aquarius', (req, res) => {
    res.render('signs.ejs')
})
router.get('/gemini', (req, res) => {
    res.render('signs.ejs')
})
router.get('/libra', (req, res) => {
    res.render('signs.ejs')
})

module.exports = router