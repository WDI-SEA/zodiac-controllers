const express = require('express');
const router = express.Router();

const earthSigns = ['Taurus', 'Virgo', 'Capricorn'];
const earthTraits = ['Grounded', 'Helpful', 'Practical', 'Realistic', 'Materialistic', 'Dependable']


router.get('/', (req, res) => {
    res.render('earth', {
        signs: earthSigns,
        traits: earthTraits
    });
  });

module.exports = router;