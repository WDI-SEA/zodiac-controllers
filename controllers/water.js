const express = require('express');
const router = express.Router();

const waterSigns = ['Cancer', 'Scorpio', 'Pisces'];
const waterTraits = ['Private', 'Mysterious', 'Psychic', 'Charming', 'Emotional', 'Sensitive']

  router.get('/', (req, res) => {
    res.render('water', {
        signs: waterSigns,
        traits: waterTraits
    });
  });
  
  router.get('/cancer', (req, res) => {
    res.sendFile('/Users/juanecabrera/seir-306/unit2/zodiac-controllers/imgs/cancer.png');
  });
  
  router.get('/scorpio', (req, res) => {
    res.sendFile('/Users/juanecabrera/seir-306/unit2/zodiac-controllers/imgs/scorpio.png');
  });
  
  router.get('/pisces', (req, res) => {
    res.sendFile('/Users/juanecabrera/seir-306/unit2/zodiac-controllers/imgs/pisces.png')
  })


module.exports = router;