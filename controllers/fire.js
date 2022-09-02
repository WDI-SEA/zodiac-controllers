const express = require('express')
const router = express.Router()
const fireSigns = ["Aries", "Leo", "Sagittarius"]
const fireThings = ['Passionate', 'Strong Emotions', 'Tempermental', 'Energetic', 'Accomplished', 'Interesting']

router.get('/', (req, res) => {
    res.render('fire', {fireSigns, fireThings})
})

module.exports = router