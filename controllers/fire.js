const express = require('express');
const router = express.Router();

const fireSigns = ['Aries', 'Leo', 'Sagittarius'];
const fireTraits = ['Passionate', 'Strong Emotions', 'Temperamental', 'Energetic', 'Accomplished', 'Interesting']


router.get('/', (req, res) => {
    res.render('fire', {
        signs: fireSigns,
        traits: fireTraits
    });
  });

  router.get('/leo', (req, res) => {
    res.sendFile('/Users/juanecabrera/seir-306/unit2/zodiac-controllers/imgs/leo.png');
  });
  
  router.get('/aries', (req, res) => {
    res.sendFile('/Users/juanecabrera/seir-306/unit2/zodiac-controllers/imgs/aries.png');
  });
  
  router.get('/sagittarius', (req, res) => {
    res.sendFile('/Users/juanecabrera/seir-306/unit2/zodiac-controllers/imgs/sagittarius.png')
  })

module.exports = router;