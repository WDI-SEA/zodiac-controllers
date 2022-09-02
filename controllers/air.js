const express = require('express')
const router = express.Router()

// const path = require('path')
// router.use('/air', express.static(path.join(__dirname, 'public')))

router.get('/Gemini', (req, res) => {
    res.redirect('/gemini.png')
})
router.get('/Libra', (req, res) => {
    res.redirect('/libra.png')
})
router.get('/Aquarius', (req, res) => {
    res.redirect('/aquarius.png')
})

module.exports = router