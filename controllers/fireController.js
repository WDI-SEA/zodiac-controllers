const express = require('express');
const router = express.Router();

router.get('/aries', (req, res) => {
	res.render('../partials/sign.ejs', { sign: 'aries' });
});

router.get('/leo', (req, res) => {
	res.render('../partials/sign.ejs', { sign: 'leo' });
});

router.get('/sagittarious', (req, res) => {
	res.render('../partials/sign.ejs', { sign: 'sagittarius' });
});

module.exports = router;
