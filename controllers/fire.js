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


module.exports = router;