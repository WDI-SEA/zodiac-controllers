const express = require('express')
const router = express.Router()

const elements = {
    air: {
        signs: ['aquarius', 'gemini', 'libra'],
        traits: ['movement', 'creatvity', 'action']
    },
    water: {
        signs: ['pisces', 'cancer', 'scorpio'],
        traits: ['private', 'mysterious', 'action']
    },
    fire: {
        signs: ['aries', 'leo', 'sagittarius'],
        traits: ['movement', 'creatvity', 'action']
    },
    earth: {
        signs: ['taurus', 'virgo', 'capricorn'],
        traits: ['movement', 'creatvity', 'action']
    }
}  

router.get('/', (req, res) =>{
    const signs = elements.water.signs
    const traits = elements.water.traits
    res.render("show.ejs", {signs:signs, traits:traits})
})

module.exports = router