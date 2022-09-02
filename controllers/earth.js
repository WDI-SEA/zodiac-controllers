const express = require("express");
const router = express.Router();
const earth =
{
    name: "Earth",
    signs: ["Taurus", "Virgo", "Capricorn"],
    traits: ["grounded", "helpful", "practical", "realistic", "materialistic", "dependable"]
}

router.get("/", (req, res) =>    // earth
{
    res.render("element-zodiacs", {element: earth});
})
router.get("/taurus", (req, res) =>
{
    res.render("sign", {sign: "Taurus"});
})
router.get("/virgo", (req, res) =>
{
    res.render("sign", {sign: "Virgo"});
})
router.get("/capricorn", (req, res) =>
{
    res.render("sign", {sign: "Capricorn"});
})

module.exports = router;