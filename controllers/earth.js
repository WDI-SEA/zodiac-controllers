const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    res.render('earth.ejs', {
        signs: ['Taurus', 'Virgo', 'Capricorn'],
        traits: ['grounded', 'helpful', 'practical', 'realistic', 'materialistic', 'dependable']
    })
})

router.get('/taurus', (req, res) => {
    const image = 'taurus.png'
    res.render('sign.ejs')
})



module.exports = router