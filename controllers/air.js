const express = require('express')
const router = express.Router()

const elements = {
    air: {
        signs: ['aquarius', 'gemini', 'libra'],
        traits: ['movement', 'creativity', 'action', 'adventure', 'exciting', 'easily provoked']
    },
    water: {
        signs: ['pisces', 'cancer', 'scorpio'],
        traits: ['pyshic', 'mysterious', 'private','charming', 'emotional', 'sensitive']
    },
    fire: {
        signs: ['ares', 'leo', 'sagittarius'],
        traits: ['passionate', 'strong emotions', 'temperamental', 'energetic', 'accomplished', 'interesting']
    },
    earth: {
        signs: ['taurus', 'virgo', 'capricorn'],
        traits: ['grounded', 'helpful', 'practical', 'realistic', 'materialistic', 'dependable']
    },

}
// get /air
router.get('/', function(req, res){
    const signs = elements.air.signs
    const traits = elements.air.traits
    res.render('show.ejs', {signs:signs, traits:traits, element:'air'})
})
router.get('/:sign', function(req, res){
    const symbol = req.params.sign
    const file = symbol + '.png'
    res.sendFile(__dirname + file)
})

module.exports = router