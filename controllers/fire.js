const express = require('express')
const router = express.Router()

// const path = require('path')
// router.use('/fire', express.static(path.join(__dirname, 'public')))

router.get('/Leo', (req, res) => {
    res.redirect('/leo.png')
})
router.get('/Aries', (req, res) => {
    res.redirect('/aries.png')
})
router.get('/Sagittarius', (req, res) => {
    res.redirect('/sagittarius.png')
})

module.exports = router