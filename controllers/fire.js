const express = require("express")
const router = express.Router()

router.get("/leo", (req, res)=>{
    res.render("fire/leo.ejs")
})
router.get("/aries", (req, res)=>{
    res.render("fire/aries.ejs")
})
router.get("/sagittarius", (req, res)=>{
    res.render("fire/sagittarius.ejs")
})

module.exports = router