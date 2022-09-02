const express = require("express");
const router = express.Router();
const water =
{
    name: "Water",
    signs: ["Pisces", "Cancer", "Scorpio"],
    traits: ["private", "mysterious", "psychic", "charming", "emotional", "sensitive"]
}

router.get("/", (req, res) =>    // water
{
    res.render("element-zodiacs", {element: water});
})
router.get("/pisces", (req, res) =>
{
    res.render("sign", {sign: "Pisces"});
})
router.get("/cancer", (req, res) =>
{
    res.render("sign", {sign: "Cancer"});
})
router.get("/scorpio", (req, res) =>
{
    res.render("sign", {sign: "Scorpio"});
})

module.exports = router;