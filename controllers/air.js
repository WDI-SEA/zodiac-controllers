const express = require("express")
const router = express.Router()

// air route
router.get("/", (req, res) => {
    res.render("air.ejs", {
        signs: ['Aquarius','Gemini','Libra'],
        traits: ['movement','creativity','action','adventure','exciting','easily provoked']
    })
})

// aquarius route
router.get("/aquarius", (req, res) => {
    res.sendFile("/Users/garrettheiner/Downloads/imgs/aquarius.png")
})

// gemini route
router.get("/gemini", (req, res) => {
    res.sendFile("/Users/garrettheiner/Downloads/imgs/gemini.png")
})

// libra route
router.get("/libra", (req, res) => {
    res.sendFile("/Users/garrettheiner/Downloads/imgs/libra.png")
})

module.exports = router