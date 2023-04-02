const express = require('express')
const router = express.Router()

const air = { 
    type: "air",
    signs: ["Aquarius", "Gemini", "Libra"], 
    traits: ["movement", "creativity", "action", "adventure", "exciting", "easily provoked"]
}

router.get('/', (req, res) => {
    res.render('show.ejs', {element: air})
})

router.get('/:sign', (req, res) => {
    res.render('sign', {sign: req.params.sign})
})

module.exports = router