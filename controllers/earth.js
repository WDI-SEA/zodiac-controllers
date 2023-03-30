const express = require("express")
const router = express.Router()

// earth route
router.get("/", (req, res) => {
    res.render("earth.ejs", {
        signs: ['Taurus','Virgo','Capricorn'],
        traits: ['grounded','helpful','practical','realistic','materialistic','dependable']
    })
})

// taurus route
router.get("/taurus", (req, res) => {
    res.sendFile("/Users/garrettheiner/Downloads/imgs/taurus.png")
})

// virgo route
router.get("/virgo", (req, res) => {
    res.sendFile("/Users/garrettheiner/Downloads/imgs/virgo.png")
})

// capricorn route
router.get("/capricorn", (req, res) => {
    res.sendFile("/Users/garrettheiner/Downloads/imgs/capricorn.png")
})

module.exports = router