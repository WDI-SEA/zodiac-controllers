const express = require("express");
const router = express.Router();
const air =
{
    name: "Air",
    signs: ["Aquarius", "Gemini", "Libra"],
    traits: ["movement", "creativity", "action", "adventure", "exciting", "easily provoked"]
}

router.get("/", (req, res) =>    // air
{
    res.render("element-zodiacs", {element: air});
})
router.get("/aquarius", (req, res) =>
{
    res.render("sign", {sign: "Aquarius"});
})
router.get("/gemini", (req, res) =>
{
    res.render("sign", {sign: "Gemini"});
})
router.get("/libra", (req, res) =>
{
    res.render("sign", {sign: "Libra"});
})

module.exports = router;