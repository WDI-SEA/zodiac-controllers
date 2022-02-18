const express = require('express');
const router = express.Router();

router.get('/pisces', (req, res) => {
	res.render('../partials/sign.ejs', { sign: 'pisces' });
});

router.get('/cancer', (req, res) => {
	res.render('../partials/sign.ejs', { sign: 'cancer' });
});

router.get('/scorpio', (req, res) => {
	res.render('../partials/sign.ejs', { sign: 'scorpio' });
});

module.exports = router;
