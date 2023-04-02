const express = require('express')
const router = express.Router()

const fire = {
    type: "fire",
    signs: ["Aries", "Leo", "Sagittarius"], 
    traits: ["passionate", "strong emotions", "tempermental", "energetic", "accomplished", "interesting"]
}

router.get('/', (req, res) => {
    res.render('show.ejs', {element: fire})
})

router.get('/:sign', (req, res) => {
    res.render('sign', {sign: req.params.sign})
})

module.exports = router 