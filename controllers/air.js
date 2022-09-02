const express = require('express')
const router = express.Router()

router.get('/gemini', (req, res) => {
    res.sendFile('/imgs/gemini.png')
})

router.get('/libra', (req, res) => {
    res.sendFile('/imgs/libra.png')
})

router.get('/aquarius', (req, res) => {
    res.sendFile(__dirname + './imgs/aquarius.png')
})


module.exports = router