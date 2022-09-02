const express = require("express");
const router = express.Router();

router.get("/aquarius", (req, res) =>
{
    res.render("sign", {path: "../imgs/aquarius.png"});
})
router.get("/gemini", (req, res) =>
{
    res.render("sign", {path: "../imgs/gemini.png"});
})
router.get("/libra", (req, res) =>
{
    res.render("sign", {path: "../imgs/libra.png"});
})

module.exports = router;