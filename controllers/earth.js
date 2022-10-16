const express = require("express")
const router = express.Router()
router.get("/taurus",(req,res)=>{
    const taurImg= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSikIbQjrRiuLMQpswvac8DEnW7jMy7zp_o9w&usqp=CAU"
    res.render("aquarius", {imgSrc: taurImg})
})
router.get("/capricorn",(req,res)=>{
    const capImg= "https://st.depositphotos.com/2979673/4583/v/450/depositphotos_45834635-stock-illustration-capricorn-zodiac-sign.jpg"
    res.render("gemini", {imgSrc: capImg})
})
router.get("/virgo",(req,res)=>{
    const virImg= "https://static.vecteezy.com/system/resources/previews/003/808/498/original/zodiac-sign-virgo-isolated-icon-zodiac-symbol-with-starry-gradient-design-astrological-element-vector.jpg"
    res.render("libra", {imgSrc: virImg})
})
router.get("/", (req,res)=>{
    res.render("earth",{signs:['Virgo','Capricorn','Taurus'],content:["Grounded","Helpful","Practical","Realistic"]})

})
module.exports = router
