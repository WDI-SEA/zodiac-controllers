const express = require("express")
const router = express.Router()
const air = {

}
// main eair route
// http GET url
router.get("/", (req, res) => {
    res.render("layout.ejs", {element: air})
})

router.get("/:sign", (req, res) => {
    res.render("sign", {sign: req.params.sign})
})
module.exports = router