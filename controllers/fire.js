const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    // res.send("fire page is working");
    res.render("fire.ejs", {
        fire: ['leo', 'aries', 'sagittarius']
    })
    console.log("fire");
})

router.get("/leo", (req, res) => {
    res.sendFile(__dirname + "/imgs/leo.png")
})

router.get("/aries", (req, res) => {
    res.sendFile(__dirname + "/imgs/aries.png")
})

router.get("/sagittarius", (req, res) => {
    res.sendFile(__dirname +"/imgs/sagittarius.png")
})

module.exports = router;