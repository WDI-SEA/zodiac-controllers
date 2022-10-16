const express = require("express")
const router = express.Router()

router.get("/", (req, res)=>{
    res.render("earth.ejs", {earthTrait: ["Grounded", "Helpful", "Realistic"], types: ["Taurus", "Virgo", "Capricorn"]})
})

router.get("/taurus", (req, res)=>{
    res.render("image.ejs", {img: "♉"})
})

router.get("/virgo", (req, res)=>{
    res.render("image.ejs", {img: "♍"})
})

router.get("/capricorn", (req, res)=>{
    res.render("image.ejs", {img: "♑"})
})

module.exports = router