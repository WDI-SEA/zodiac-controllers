const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.render("show", {
        element: {
            name: "fire",
            signs: ["Aries", "Leo", "Sagittarius"],
            traits: ["Passionate", "Strong Emotions", "Tempermental", "Energetic", "Accomplished", "Interesting"]
        },
    })
})

router.get("/aries", (req, res) => {
    res.render('sign.ejs', {sign: 'aries'})
})

router.get("/leo", (req, res) => {
    res.render('sign.ejs', {sign: 'leo'})
})

router.get("/sagittarius", (req, res) => {
    res.render('sign.ejs', {sign: 'sagittarius'})
})

module.exports = router;