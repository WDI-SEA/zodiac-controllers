const express = require('express');
const router = express.Router();

const earthSigns = ['Taurus', 'Virgo', 'Capricorn'];
const earthTraits = ['Grounded', 'Helpful', 'Practical', 'Realistic', 'Materialistic', 'Dependable']


router.get('/', (req, res) => {
    res.render('earth', {
        signs: earthSigns,
        traits: earthTraits,
        title: "Earth Signs and Traits"
    });
  });


  router.get('/taurus', (req, res) => {
    res.sendFile('/Users/juanecabrera/seir-306/unit2/zodiac-controllers/imgs/taurus.png');
  });
  
  router.get('/virgo', (req, res) => {
    res.sendFile('/Users/juanecabrera/seir-306/unit2/zodiac-controllers/imgs/virgo.png');
  });
  
  router.get('/capricorn', (req, res) => {
    res.sendFile('/Users/juanecabrera/seir-306/unit2/zodiac-controllers/imgs/capricorn.png')
  })


module.exports = router;