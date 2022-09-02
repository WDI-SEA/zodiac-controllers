const express = require('express')
const router = express.Router()

router.get('/leo', (req, res) => {
    res.sendFile('/imgs/leo.png')
})

router.get('/aries', (req, res) => {
    res.sendFile('/imgs/aries.png')
})

router.get('/sagittarius', (req, res) => {
    res.sendFile('/imgs/sagittarius.png')
})



module.exports = router