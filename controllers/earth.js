const express = require('express')
const router = express.Router()

// const path = require('path')
// router.use('/earth', express.static(path.join(__dirname, 'public')))

router.get('/taurus', (req, res) => {
    res.redirect('/taurus.png')
})
router.get('/virgo', (req, res) => {
    res.redirect('/virgo.png')
})
router.get('/capricorn', (req, res) => {
    res.redirect('/capricorn.png')
})

module.exports = router