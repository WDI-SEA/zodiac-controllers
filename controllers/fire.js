const express = require('express')
const router = express.Router()

module.exports = router


router.get('/aries', (req,res) => {
    res.send('test')
})
router.get('/leo', (req,res) => {
    res.send('test')
})
router.get('/sagittarius', (req,res) => {
    res.send('test')
})
