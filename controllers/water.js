const express = require("express")
const router = express.Router()

router.get("/", (req,res) => {
    res.render("water.ejs", {waterTrait: ["Private", "Charming", "Sensitive"], types:["Cancer", "Scorpic","Pisces"]})

})




router.get("Cancer", (req,res) => {
    res.render("image.ejs", {img:""})
})

router.get("Scorpics", (req,res) => {
    res.render("image.ejs", {img:""})
})

router.get("Pisces", (req,res) => {
    res.render("image.ejs", {img:""})
})

module.exports = router