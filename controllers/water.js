const express = require('express')
const router = express.Router()

router.get('/water', (req, res) => {
    res.render('./water/index.ejs', {
      element: 'Water',
      signs: ['Pisces','Cancer','Scorpio'],
      traits: [
        'private',
        'mysterious',
        'pyshic',
        'charming',
        'emotional',
        'sensitive'
      ]
    })
  })
  router.get('/water/cancer',(req,res)=>{
    res.render('./water/image.ejs', {image:'/imgs/cancer.png', sign: 'Cancer'})
  })
  router.get('/water/scorpio',(req,res)=>{
    res.render('./water/image.ejs', {image:'/imgs/scorpio.png', sign: 'Scorpio'})
  })
  router.get('/water/pisces',(req,res)=>{
    res.render('./water/image.ejs', {image:'/imgs/pisces.png', sign: 'Pisces'})
  })

  module.exports = router
  