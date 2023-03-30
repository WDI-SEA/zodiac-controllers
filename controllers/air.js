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

module.exports = router;