const express = require("express")
const router = express.Router()

// water route
router.get("/", (req, res) => {
    res.render("water.ejs", {
        signs: ['Cancer','Scorpio','Pisces'],
        traits: ['private','mysterious','psychic','charming','emotional','sensitive']
    })
})

// cancer route
router.get("/cancer", (req, res) => {
    res.sendFile("/Users/garrettheiner/Downloads/imgs/cancer.png")
})

// scorpio route
router.get("/scorpio", (req, res) => {
    res.sendFile(__dirname+"/imgs/scorpio.png")
})

// pisces route
router.get("/pisces", (req, res) => {
    res.sendFile(__dirname+"/imgs/pisces.png")
})

module.exports = router