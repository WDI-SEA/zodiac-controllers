const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('fire.ejs', {
        signs: ['Aries', 'Leo', ' Sagittarius'],
        traits: ['passionate', 'strong emotions', 'temperamental', 'energetic', 'accomplished', 'interesting' ]
    })
})
router.get('/aries', (req, res) => {
    res.render('signs.ejs')
})
router.get('/leo', (req, res) => {
    res.render('signs.ejs')
})
router.get('/sagittarius', (req, res) => {
    res.render('signs.ejs')
})

module.exports = router