const express = require ("express")
const router = express.Router()
const index = require ("../index")

router.get("/", (req, res) => {
    res.render("show", {element : index.elements.water })    
})

router.get("/Cancer", (req, res) => {
    res.render("images", {sign: "Cancer", element : index.elements.water })    
})

router.get("/Scorpio", (req, res) => {
    res.render("images", {sign: "Scorpio", element : index.elements.water })    
})

router.get("/Pisces", (req, res) => {
    res.render("images", {sign: "Pisces", element : index.elements.water })    
})




module.exports = router;