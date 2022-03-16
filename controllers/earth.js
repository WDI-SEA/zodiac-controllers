const express = require('express')
const router = express.Router()

module.exports = router


router.get('/taurus', (req,res) => {
    res.send('test')
})
router.get('/virgo', (req,res) => {
    res.send('test')
})
router.get('/capricorn', (req,res) => {
    res.send('test')
})
