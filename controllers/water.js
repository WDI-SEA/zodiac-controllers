const express = require('express')
const router = express.Router()

router.use(express.static("public"))

router.get("/cancer", (req, res) => {
    res.render("template.ejs", {
        sign: 'cancer',
        category: 'water',
        image: 'imgs/cancer.png'
    })
})

router.get("/scorpio", (req, res) => {
    res.render("template.ejs", {
        sign: 'scorpio',
        category: 'water',
        image: 'imgs/scorpio.png'
    })
})

router.get("/pisces", (req, res) => {
    res.render("template.ejs", {
        sign: 'pisces',
        category: 'water',
        image: 'imgs/pisces.png'
    })
})

module.exports = router