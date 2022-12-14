const express = require('express')
const router = express.Router()

router.get('/fires', (req, res) => {
    res.render('fire.ejs' , {
        Signs: ['leo', 'aries', 'sagittarius']
    })
})

module.exports = router