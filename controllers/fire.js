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
    res.render("sign", {path: "../imgs/aries.png"});
})
router.get("/leo", (req, res) =>
{
    res.render("sign", {path: "../imgs/leo.png"});
})
router.get("/sagittarius", (req, res) =>
{
    res.render("sign", {path: "../imgs/sagittarius.png"});
})

module.exports = router;