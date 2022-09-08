const express = require("express")
const router = express.Router()


router.get("/", (req, res) => {
    res.render("show", {
        element: {
            name: "earth",
            signs: ["Taurus", "Virgo", "Capricorn"],
            traits: ["Grounded", "Helpful", "Practical", "Realistic", "Materialistic", "Dependable"]
        }
    })
})

router.get("/taurus", (req, res) => {
    res.render('sign.ejs', {sign: 'taurus'})
})

router.get("/virgo", (req, res) => {
    res.render('sign.ejs', {sign: 'virgo'})
})

router.get("/capricorn", (req, res) => {
    res.render('sign.ejs', {sign: 'capricorn'})
})






module.exports = router;