const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    // res.send("water page is working");
    res.render("water.ejs", {
        water: ['cancer', 'scorpio', 'pisces']
    })
    console.log("water");
})

router.get("/cancer", (req, res) => {
    res.sendFile(__dirname + "/imgs/cancer.png");
})

router.get("/scorpio", (req, res) => {
    res.sendFile(__dirname + "/imgs/scorpio.png")
})

router.get("/pisces", (req, res) => {
    res.sendFile(__dirname + "/imgs/pisces.png")
 })

module.exports = router;