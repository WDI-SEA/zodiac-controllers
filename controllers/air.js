const express = require('express')
const router = express.Router()
const stars = {
    air: {
        signs: ['Aquarius', 'Gemini', 'Libra'],
        traits: ['Creativity', 'Action', 'Exciting']
    }
}
router.get('/', function (req, res) {
    const signs = stars.air.signs
    const traits = stars.air.traits
    res.render('page.ejs', { signs: signs, traits: traits, element: 'air' })
})

// = ! APRILS ADDITIONAL CODE FOR IMAGES! = \\

// router.get('/:sign', function (req, res) {
//     res.send(req.params.sign)
// })
module.exports = router