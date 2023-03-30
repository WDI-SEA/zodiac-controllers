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

module.exports = router;