const express = require('express')
const router = express.Router()

router.get('/fire', (req, res) => {
    res.render('./fire/index.ejs', {
      element: 'Fire',
      signs: ['Aries','Leo','Sagitarrius'],
      traits: [
        'passionate',
        'strong emotions',
        'temperamental',
        'energetic',
        'accomplished',
        'interesting'
      ]
    })
  })
  router.get('/fire/leo',(req,res)=>{
    res.render('./fire/image.ejs', {image:'/imgs/leo.png'})
  })
  router.get('/fire/aries',(req,res)=>{
    res.render('./fire/image.ejs', {image:'/imgs/aries.png'})
  })

  router.get('/fire/sagitarrius',(req,res)=>{
    res.render('./fire/image.ejs', {image:'/imgs/sagittarius.png'})
  })
  
module.exports=router