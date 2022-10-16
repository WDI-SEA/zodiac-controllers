const express = require("express")
const router = express.Router()

router.get("/", (req, res)=>{
    res.render("air.ejs", {airTrait: ["Movement", "Action", "Adventure"], types: ["Gemini", "Libra", "Aquarius"]})
})

router.get("/gemini", (req, res)=>{
    res.render("image.ejs", {img: "♊"})
})

router.get("/libra", (req, res)=>{
    res.render("image.ejs", {img: "♎"})
})

router.get("/aquarius", (req, res)=>{
    res.render("image.ejs", {img: "♒"})
})

module.exports = router