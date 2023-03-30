const express = require("express")
const router = express.Router()

const earth = { 
    type: "earth",
    signs: ["Aquarius", "Gemini", "Libra"], 
    traits: ["movement", "creativity", "action", "adventure", "exciting", "easily provoked"]
}

// main earth route
// http GET url localhost:8000/earth
router.get("/", (req, res) => {
    res.render("show", {element: earth})
})

// earth sign route
// http GET url localhost:8000/earth/:sign
router.get("/:sign", (req, res) => {
    // res.send(req.params.sign)
    res.render("sign", {sign: req.params.sign})
})

module.exports = router