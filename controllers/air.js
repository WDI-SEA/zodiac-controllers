const express = require('express')
const router = express.Router()

router.get('/air', (req, res) => {
    res.render('./air/index.ejs', {
      element: 'Air',
      signs: ['Aquarius','Gemini','Libra'],
      traits: [
        'movement',
        'creativity',
        'action',
        'adventure',
        'exciting',
        'easily provoked'
      ]
    })
  })
  router.get('/air/libra',(req,res)=>{
    res.render('./air/image.ejs', {image:'/imgs/libra.png'})
  })
  router.get('/air/aquarius',(req,res)=>{
    res.render('./air/image.ejs',{image:'/imgs/aquarius.png'})
  })
  router.get('/air/gemini',(req,res)=>{
    res.render('./air/image.ejs', {image:'/imgs/gemini.png'})
  })


module.exports = router