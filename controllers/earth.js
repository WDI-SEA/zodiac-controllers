const express = require("express")
const router = express.Router()

router.get("/", (req,res) => {
    res.render("earth.ejs", {earthTrait: ["Grounded", "Helpful", "Realistic"], types:["Taurus", "Virgi","Capricon"]})

})




router.get("Taurus", (req,res) => {
    res.render("image.ejs", {img:""})
})

router.get("Virgi", (req,res) => {
    res.render("image.ejs", {img:""})
})

router.get("Capricon", (req,res) => {
    res.render("image.ejs", {img:""})
})

module.exports = router