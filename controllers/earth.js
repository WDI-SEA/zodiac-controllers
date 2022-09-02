const express = require("express");
const router = express.Router();

router.get("/taurus", (req, res) =>
{
    res.render("sign", {path: "../imgs/taurus.png"});
})
router.get("/virgo", (req, res) =>
{
    res.render("sign", {path: "../imgs/virgo.png"});
})
router.get("/capricorn", (req, res) =>
{
    res.render("sign", {path: "../imgs/capricorn.png"});
})

module.exports = router;