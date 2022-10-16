const express = require("express")
const router = express.Router()

router.get("/", (req, res)=>{
    res.render("fire.ejs", {fireTrait: ["Passionate", "Energetic", "Enteresting"], types: ["Leo", "Aries", "Sagittarius"]})
})

router.get("/leo", (req, res)=>{
    res.render("image.ejs", {img: "♌"})
})

router.get("/aries", (req, res)=>{
    res.render("image.ejs", {img: "♈"})
})

router.get("/sagittarius", (req, res)=>{
    res.render("image.ejs", {img: "♐"})
})

module.exports = router