const express = require("express")
const router = express.Router()

router.get("/", (req, res)=>{
    res.render("water.ejs", {waterTrait: ["Private", "Charming", "Sensitive"], types: ['Cancer', 'Scorpio', 'Pisces']})
})

router.get("/cancer", (req, res)=>{
    res.render("image.ejs", {img: "♋"})
})

router.get("/Scorpio", (req, res)=>{
    res.render("image.ejs", {img: "♏"})
})

router.get("/Pisces", (req, res)=>{
    res.render("image.ejs", {img: "♓"})
})

module.exports = router