const express = require('express')
const router = express.Router()
const airSigns = ["Aquarius", "Gemini", "Libra"]
const airThings = ['Movement', 'Creativity', 'Action', 'Adventure', 'Exciting', 'Easily Provoked']

router.get('/', (req, res) => {
    res.render('air', {airSigns, airThings})
})

module.exports = router