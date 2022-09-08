const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("show", {
        element: {
            name: "air",
            signs: ["Aquarius", "Gemini", "Libra"],
            traits: ["Movement", "Creativity", "Action", "Adventure", "Exciting", "Easily Provoked"]
        }
    })
})

router.get("/aquarius", (req, res) => {
    res.render('sign.ejs', {sign: 'aquarius'})
})

router.get("/gemini", (req, res) => {
    res.render('sign.ejs', {sign: 'gemini'})
})

router.get("/libra", (req, res) => {
    res.render('sign.ejs', {sign: 'libra'})
})


module.exports = router;