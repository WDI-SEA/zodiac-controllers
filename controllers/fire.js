const express = require("express")
const router = express.Router()

// fire route
router.get("/", (req, res) => {
    res.render("fire.ejs", {
        signs: ['Aries','Leo','Sagittarius'],
        traits: ['passionate','strong emotions','tempermental','energetic','accomplished','interesting']
    })
})

// aries route
router.get("/aries", (req, res) => {
    res.sendFile("/Users/garrettheiner/Downloads/imgs/aries.png")
})

// leo route
router.get("/leo", (req, res) => {
    res.sendFile("/Users/garrettheiner/Downloads/imgs/leo.png")
})

// sagittarius route
router.get("/sagittarius", (req, res) => {
    res.sendFile("/Users/garrettheiner/Downloads/imgs/sagittarius.png")
})

module.exports = router