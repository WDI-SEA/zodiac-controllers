const express = require('express')
const router = express.Router()

// const path = require('path')
// router.use('/earth', express.static(path.join(__dirname, 'public')))

router.get('/Taurus', (req, res) => {
    res.redirect('/taurus.png')
})
router.get('/Virgo', (req, res) => {
    res.redirect('/virgo.png')
})
router.get('/Capricorn', (req, res) => {
    res.redirect('/capricorn.png')
})

module.exports = router