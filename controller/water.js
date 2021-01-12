const express=require('express')
const router=express.Router()
let imgPath

//router.use(layouts)
router.get('/cancer',(req,res)=>{
    imgPath='/img/pink.jpg'
    console.log(imgPath)
    res.render('secondElementDisplay.ejs',{path:imgPath,sign:"cancer"})
})
router.get('/scorpio',(req,res)=>{
    imgPath='/img/images.png'
    res.render('secondElementDisplay.ejs',{path:imgPath,sign:'scorpio'})
})
router.get('/pisces',(req,res)=>{
    imgPath='/img/download.png'
    res.render('secondElementDisplay.ejs',{path:imgPath,sign:"pisces"})
})
module.exports=router