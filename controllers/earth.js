const express = require('express')
const router = express.Router()

router.get('/taurus', (req, res) => {
    res.sendFile('/imgs/taurus.png')
})

router.get('/virgo', (req, res) => {
    res.sendFile('/imgs/virgo.png')
})

router.get('/capricorn', (req, res) => {
    res.sendFile('/imgs/capricorn.png')
})


module.exports = router