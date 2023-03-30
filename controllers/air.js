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

module.exports = router;