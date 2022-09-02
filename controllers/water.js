const express = require('express')
const router = express.Router()

router.get('/cancer', (req, res) => {
    res.sendFile('../imgs/cancer.png')
})

router.get('/scorpio', (req, res) => {
    res.sendFile('../imgs/scorpio.png')
})

router.get('/pisces', (req, res) => {
    res.sendFile('../imgs/pisces.png')
})




module.exports = router