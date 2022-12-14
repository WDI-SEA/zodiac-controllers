const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    res.render('air.ejs', {
        air: ['Movement', 'Creativity', 'Action', 'Adventure', 'Exciting', 'Easily Provoked']
    })
})
router.get('/aquarius', (req, res) => {
    res.render('aquarius.ejs')
})
router.get('/libra', (req, res) => {
    res.render('libra.ejs')
})
router.get('/gemini', (req, res) => {
    res.render('gemini.ejs')
})

module.exports = router