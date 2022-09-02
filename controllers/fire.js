const express = require ("express")
const router = express.Router()
const index = require ("../index")

router.get("/", (req, res) => {
    res.render("show", {element : index.elements.fire })
})

router.get("/Leo", (req, res) => {
    res.render("images", {sign: "Leo", element : index.elements.fire })
})

router.get("/Aries", (req, res) => {
    res.render("images", {sign: "Aries", element : index.elements.fire })
})

router.get("/Sagittarius", (req, res) => {
    res.render("images", {sign: "Sagittarius", element : index.elements.fire })
})




module.exports = router;