const express = require('express')
const router = express.Router()

router.use(express.static("public"))

router.get("/leo", (req, res) => {
    res.render("template.ejs", {
        sign: 'leo',
        category: 'fire',
        image: 'imgs/leo.png'
    })
})

router.get("/aries", (req, res) => {
    res.render("template.ejs", {
        sign: 'aries',
        category: 'fire',
        image: 'imgs/aries.png'
    })
})

router.get("/sagittarius", (req, res) => {
    res.render("template.ejs", {
        sign: 'sagittarius',
        category: 'fire',
        image: 'imgs/sagittarius.png'
    })
})

module.exports = router