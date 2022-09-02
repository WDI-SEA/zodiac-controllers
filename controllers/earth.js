const express = require('express')
const router = express.Router()


router.get("/", (req, res) => {
    let earthSigns = ['Taurus', 'Virgo', 'Capricorn']
    let earthTraits = ["grounded", "helpful", "practical", "realistic", "materialistic", "dependable"]
    res.render("show", {signs: earthSigns, traits: earthTraits})
});

router.get('/taurus', (req, res) => {
    res.render('./earth/taurus.ejs')
})

router.get('/virgo', (req, res) => {
    res.render('virgo.ejs')
})

module.exports = router;