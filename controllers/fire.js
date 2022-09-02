const express = require('express')
const router = express.Router()

router.get('/leo', (req, res) => {
    res.send('leo')
})
router.get('/aries', (req, res) => {
    res.send('aries')
})
router.get('/sagittarius', (req, res) => {
    res.send('sagittarius')
})

module.exports = router