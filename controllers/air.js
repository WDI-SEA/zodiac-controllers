const express = require("express")
const router = express.Router()
router.get("/aquarius",(req,res)=>{
    const aquaImg= "https://numerologysign.com/wp-content/uploads/2020/08/Aquarius-Zodiac-Symbol.png"
    res.render("aquarius", {imgSrc: aquaImg})
})
router.get("/gemini",(req,res)=>{
    const gemImg= "https://static.vecteezy.com/system/resources/previews/003/808/495/original/zodiac-sign-gemini-isolated-icon-zodiac-symbol-with-starry-gradient-design-astrological-element-vector.jpg"
    res.render("gemini", {imgSrc: gemImg})
})
router.get("/libra",(req,res)=>{
    const libImg= "https://numerologysign.com/wp-content/uploads/2020/08/Libra-Zodiac-Symbol.png"
    res.render("libra", {imgSrc: libImg})
})
router.get("/", (req,res)=>{
    res.render("air" ,{signs:['Aquaries','Libra','Gemini'],content:["movement", "creatvity","action","adventure"]})

})
module.exports = router