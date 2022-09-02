const express = require("express");
const router = express.Router();
const fire =
{
    name: "Fire",
    signs: ["Aries", "Leo", "Sagittarius"],
    traits: ["passionate", "strong emotions", "temperamental", "energetic", "accomplished", "interesting"]
}

router.get("/", (req, res) =>    // fire
{
    res.render("element-zodiacs", {element: fire});
})
router.get("/aries", (req, res) =>
{
    res.render("sign", {sign: "Aries"});
})
router.get("/leo", (req, res) =>
{
    res.render("sign", {sign: "Leo"});
})
router.get("/sagittarius", (req, res) =>
{
    res.render("sign", {sign: "Sagittarius"});
})

module.exports = router;