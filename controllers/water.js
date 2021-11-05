const express = require('express')
const router = express.Router()

router.get('/', (req,res) => {
    const waterTraits = ['private', 'mysterious', 'psychic', 'charming', 'emotional', 'sensative']
    const waterSigns = ['PISCES', 'CANCER', 'SCORPIO']
    res.render("water.ejs", {waterTraits, waterSigns})
})

module.exports = router