const express = require('express')
const router = express.Router()

router.use(express.static("public"))

router.get("/taurus", (req, res) => {
    res.render("template.ejs", {
        sign: 'taurus',
        category: 'earth',
        image: 'imgs/taurus.png'
    })
})

router.get("/virgo", (req, res) => {
    res.render("template.ejs", {
        sign: 'virgo',
        category: 'earth',
        image: 'imgs/virgo.png'
    })
})

router.get("/capricorn", (req, res) => {
    res.render("template.ejs", {
        sign: 'capricorn',
        category: 'earth',
        image: 'imgs/capricorn.png'
    })
})

module.exports = router
