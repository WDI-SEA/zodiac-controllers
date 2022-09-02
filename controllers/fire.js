const express = require("express");
const router = express.Router();

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