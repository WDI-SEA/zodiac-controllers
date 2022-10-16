const express = require('express'),
router = express.Router()

const data = {title: 'Water', signs: ['Pisces', 'Cancer', 'Scorpio'],traits: ['Private', 'Pyschic', 'Charming',]}

router.get('/Taurus', (req, res) => {
    res.render('water', { title: 'Taurus' , imgsrc: './public/images/taurussymb.jpeg' , traits: [''], signs: [''] });
  });

router.get('/Virgo', (req, res) => {
    res.render('water', { title: 'Virgo', imgsrc: './public/images/virgosymb.jpeg', style: 'style=height:400px', traits: [''], signs: [''] });
  });
  
  
router.get('/Capricorn', (req, res) => {
    res.render('water', { title: 'Capricorn', imgsrc: './public/images/capricornsymb.jpeg', style: 'style=height:400px', traits: [''], signs: [''] });
  }); 

router.get('/', (req, res) => {
    res.render('water', { title: data.title, imgsrc: './public/images/water.jpeg', style: 'style=height:400px' , traits: data.traits, signs: data.signs});
  }); 


module.exports = router;
