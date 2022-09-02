const express = require("express");
const router = express.Router();

router.get("/pisces", (req, res) =>
{
    res.render("sign", {path: "../imgs/pisces.png"});
})
router.get("/cancer", (req, res) =>
{
    res.render("sign", {path: "../imgs/cancer.png"});
})
router.get("/scorpio", (req, res) =>
{
    res.render("sign", {path: "../imgs/scorpio.png"});
})

module.exports = router;