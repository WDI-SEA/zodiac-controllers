const express = require('express')
const router = express.Router()

// const path = require('path')
// router.use('/fire', express.static(path.join(__dirname, 'public')))

router.get('/leo', (req, res) => {
    res.redirect('/leo.png')
})
router.get('/aries', (req, res) => {
    res.redirect('/aries.png')
})
router.get('/sagittarius', (req, res) => {
    res.redirect('/sagittarius.png')
})

module.exports = router