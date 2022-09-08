const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.render("show", {
        element: {
            name: "water",
            signs: ["Pisces", "Cancer", "Scorpio"],
            traits: ["Private", "Mysterious", "Psyhic", "Charming", "Emotional", "Sensitive"]
        }
    })
})

router.get("/pisces", (req, res) => {
    res.render('sign.ejs', {sign: 'pisces'})
})

router.get("/cancer", (req, res) => {
    res.render('sign.ejs', {sign: 'cancer'})
})

router.get("/scorpio", (req, res) => {
    res.render('sign.ejs', {sign: 'scorpio'})
})

module.exports = router;