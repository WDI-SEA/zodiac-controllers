const express = require('express')
const router = express.Router()

router.get('/waters', (req, res) => {
    res.render('water.ejs' , {
        Signs: ['cancer', 'scorpio', 'pisces']
    })
})

module.exports = router