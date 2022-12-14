const express = require('express')
const router = express.Router()
const stars = {
    water: {
        signs: ['Pisces', 'Cancer', 'Scorpio'],
        traits: ['Private', 'Charming', 'Sensitive']
    }
}
router.get('/', function (req, res) {
    const signs = stars.water.signs
    const traits = stars.water.traits
    res.render('page.ejs', { signs: signs, traits: traits, element: 'water' })
})

module.exports = router