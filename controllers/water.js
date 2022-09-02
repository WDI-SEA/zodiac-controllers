const express = require('express')
const router = express.Router()

// const path = require('path')
// router.use('/water', express.static(path.join(__dirname, 'public')))

router.get('/cancer', (req, res) => {
    res.redirect('/cancer.png')
})
router.get('/scorpio', (req, res) => {
    res.redirect('/scorpio.png')
})
router.get('/pisces', (req, res) => {
    res.redirect('/pisces.png')
})

module.exports = router