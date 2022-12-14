const express = require('express')
const router = express.Router()

router.get('/waters', (req, res) => {
    res.render('water.ejs' , {
        Signs: ['cancer', 'scorpio', 'pisces'],
        Abilities: ['private', 'mysterious', 'pystic', 'charming', 'emotional', 'sensitive']
    })
})

module.exports = router