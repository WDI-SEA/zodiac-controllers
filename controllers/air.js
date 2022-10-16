const express = require('express'),
router = express.Router()

const data = {title: 'Air', signs: ['Libra', 'Gemini', 'Aquarius'],traits: ['Movement', 'Creativity', 'Action',
'Adventure', 'Exciting']}

router.get('/Libra', (req, res) => {
    res.render('air', { title: 'Libra' , imgsrc: './public/images/librasymb.jpeg' , traits: [''], signs: [''] });
  });

router.get('/Gemini', (req, res) => {
    res.render('air', { title: 'Gemini', imgsrc: './public/images/geminisymb.jpeg', style: 'style=height:400px', traits: [''], signs: [''] });
  });
  
  
router.get('/Aquarius', (req, res) => {
    res.render('air', { title: 'Aquarius', imgsrc: './public/images/aquarius.jpeg', style: 'style=height:400px', traits: [''], signs: [''] });
  }); 

router.get('/', (req, res) => {
    res.render('air', { title: data.title, imgsrc: './public/images/water.jpeg', style: 'style=height:400px' , traits: data.traits, signs: data.signs});
  }); 


module.exports = router;
