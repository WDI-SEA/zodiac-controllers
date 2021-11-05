const express = require('express')
const router = express.Router()

router.get('/', (req,res) => {
    const fireTraits = ['passionate', 'strong emotions', 'tempermental', 'energetic', 'accomplished', 'interesting']
    const fireSigns = ['ARIES', 'LEO', 'SAGITTARIUS']
    res.render("fire.ejs", {fireTraits, fireSigns})
})

module.exports = router