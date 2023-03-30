const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    // res.send("air page is working");
    res.render("air.ejs", {
        air:['gemini', 'libra', 'aquarius']
    })
    console.log("air");
})

router.get("/gemini", (req, res) => {
    res.sendFile(__dirname + "/imgs/gemini.png");
})
router.get("/libra", (req, res) => {
    res.sendFile(__dirname + "/imgs/libra.png");
})
router.get("/aquarius", (req, res) => {
    res.sendFile(__dirname + "/imgs/aquarius.png");
})

module.exports = router;