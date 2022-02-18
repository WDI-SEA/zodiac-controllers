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
    res.render('./air/image.ejs', {image:'/imgs/libra.png', sign: 'Libra'})
  })
  router.get('/air/aquarius',(req,res)=>{
    res.render('./air/image.ejs',{image:'/imgs/aquarius.png', sign: 'Aquarius'})
  })
  router.get('/air/gemini',(req,res)=>{
    res.render('./air/image.ejs', {image:'/imgs/gemini.png', sign: 'Gemini'})
  })


module.exports = router