const express = require("express");
const router = express.Router();


router.get("/", (req, res) => {
    // res.send("earth page is working");
    res.render("earth.ejs", {
        earth: ['taurus', 'virgo', 'capricorn']
    })
    console.log("earth");
})

router.get("/taurus", (req, res) => {
    res.sendFile(__dirname + "/imgs/taurus.png")
})
router.get("/virgo", (req, res) => {
    res.sendFile(__dirname + "/imgs/virgo.png")
})
router.get("/capricorn", (req, res) => {
    res.sendFile(__dirname + "/imgs/capricorn.png")
})



module.exports = router;