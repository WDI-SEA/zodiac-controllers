const express = require('express')
const router = express.Router()

router.get('/airs', (req, res) => {
    res.render('air.ejs' , {
        Signs: ['gemini', 'libra', 'aquarius']
    })
})

module.exports = router