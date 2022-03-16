const express = require('express')
const router = express.Router()

module.exports = router




router.get('/aquarius', (req,res) => {
    res.send('test')
})
router.get('/gemini', (req,res) => {
    res.send('test')
})
router.get('/libra', (req,res) => {
    res.send('test')
})

