const express = require('express')
const router = express.Router()

router.use(express.static("public"))

router.get("/gemini", (req, res) => {
    res.render("template.ejs", {
        sign: 'gemini',
        category: 'air',
        image: 'imgs/gemini.png'
    })
})

router.get("/libra", (req, res) => {
    res.render("template.ejs", {
        sign: 'libra',
        category: 'air',
        image: 'imgs/libra.png'
    })
})

router.get("/aquarius", (req, res) => {
    res.render("template.ejs", {
        sign: 'aquarius',
        category: 'air',
        image: 'imgs/aquarius.png'
    })
})

module.exports = router