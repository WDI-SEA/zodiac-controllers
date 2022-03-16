const express = require('express')
const router = express.Router()

module.exports = router


router.get('/pisces', (req,res) => {
    res.send('test')
})
router.get('/cancer', (req,res) => {
    res.send('test')
})
router.get('/scorpio', (req,res) => {
    res.send('test')
})
