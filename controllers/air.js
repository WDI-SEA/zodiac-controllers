const express = require ("express")
const router = express.Router()
const index = require ("../index")

router.get("/", (req, res) => {
    res.render("show", {element : index.elements.air })
})

router.get("/Gemini", (req, res) => {
    res.render("images", {sign : "Gemini", element : index.elements.air })
    })


router.get("/Libra", (req, res) => {
    res.render("images", {sign : "Libra", element : index.elements.air })
})

router.get("/Aquarius", (req, res) => {
    res.render("images", {sign : "Aquarius", element : index.elements.air })
})




module.exports = router;