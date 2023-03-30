const express = require('express');
const router = express.Router();

const airSigns = ['Gemini', 'Libra', 'Aquarius'];
const airTraits = ['Movement', 'Creativity', 'Action', 'Adventure', 'Exciting', 'Easily Provoked']


router.get('/', (req, res) => {
    res.render('air', {
        signs: airSigns,
        traits: airTraits
    });
  });

  router.get('/gemini', (req, res) => {
    res.sendFile('/Users/juanecabrera/seir-306/unit2/zodiac-controllers/imgs/gemini.png');
  });
  
  router.get('/libra', (req, res) => {
    res.sendFile('/Users/juanecabrera/seir-306/unit2/zodiac-controllers/imgs/libra.png');
  });
  
  router.get('/aquarius', (req, res) => {
    res.sendFile('/Users/juanecabrera/seir-306/unit2/zodiac-controllers/imgs/aquarius.png')
  })

module.exports = router;