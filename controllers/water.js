const express = require("express")
const router = express.Router()

// cancer route
router.get("/cancer", (req, res) => {
    res.sendFile("/cancer.ejs")
})

// scorpio route
router.get("/scorpio", (req, res) => {
    res.sendFile(__dirname+"/scorpio.png")
})

// pisces route
router.get("/pisces", (req, res) => {
    res.sendFile(__dirname+"/pisces.png")
})

module.exports = router