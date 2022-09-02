const express = require('express')
const router = express.Router()

router.get('/cancer', (req, res) => {
    res.send('cancer')
})
router.get('/scorpio', (req, res) => {
    res.send('scorpio')
})
router.get('/pisces', (req, res) => {
    res.send('pisces')
})

module.exports = router