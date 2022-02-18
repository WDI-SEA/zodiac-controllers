const express = require('express')
const router = express.Router()

router.get('/earth', (req, res) => {
    res.render('./earth/index.ejs', {
      element: 'Earth',
      signs: ['Taurus','Virgo','Capricorn'],
      traits: [
        'grounded',
        'helpful',
        'practical',
        'realistic',
        'materialistic',
        'dependable'
      ]
    })
  })
  router.get('/earth/taurus',(req,res)=>{
    res.render('./earth/image.ejs', {image:'/imgs/taurus.png', sign: 'Taurus'})
  })
  router.get('/earth/virgo',(req,res)=>{
    res.render('./earth/image.ejs', {image:'/imgs/virgo.png', sign: 'Virgo'})
  })
  router.get('/earth/capricorn',(req,res)=>{
    res.render('./earth/image.ejs', {image:'/imgs/capricorn.png', sign: 'Capricorn'})
  })

  module.exports = router