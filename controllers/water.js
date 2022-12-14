const express = require('express')
const router = express.Router()
router.use(express.static('public'))


router.get('/', (req, res) => {
    res.render('water.ejs', {
        signs: ['pisces', 'cancer', 'scorpio'],
        traits: ['private', 'mysterious', 'liquid', 'charming', 'emotional', 'sensitive']
    })
})

// this works sort of but not really


module.exports = router