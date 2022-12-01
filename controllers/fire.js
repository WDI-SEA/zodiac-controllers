const express = require("express")
const router = express.Router()

router.get("/", (req,res) => {
    res.render("fire.ejs", {fireTrait: ["Passionate", "Energetic", "Enteresting"], types:["Leo", "Aries","Sagittarius"]})

})




router.get("Leo", (req,res) => {
    res.render("image.ejs", {img:""})
})

router.get("Aries", (req,res) => {
    res.render("image.ejs", {img:""})
})

router.get("Sagittarius", (req,res) => {
    res.render("image.ejs", {img:""})
})

module.exports = router