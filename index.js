const express = require('express');
const ejsLayout = require('express-ejs-layouts');
const app = express();

// Middleware
app.set('view engine', 'ejs');
app.use(ejsLayout);

app.use((req, res, next) => {
	console.log('hello from middleware');

	next();
});

app.get('/', (req, res) => {
	res.render('index.ejs');
});

app.get('/water', (req, res) => {
	res.render('water.ejs', {
		element: 'Water',
		traits: [ 'private', 'mysterious', 'psychic', 'charming', 'emotional', 'sensitive' ],
		signs: [ 'Pisces', 'Cancer', 'Scorpio' ]
	});
});

app.get('/air', (req, res) => {
	res.render('air.ejs', {
		element: 'Air',
		traits: [ 'movement', 'creativity', 'action', 'adventure', 'exciting', 'easily provoked' ],
		signs: [ 'Aquarious', 'Gemini', 'Libra' ]
	});
});

app.get('/fire', (req, res) => {
	res.render('fire.ejs', {
		element: 'Fire',
		traits: [ 'passionate', 'strong emotions', 'temperamental', 'energetic', 'accomplished', 'interesting' ],
		signs: [ 'Aries', 'Leo', 'Sagittarious' ]
	});
});

app.get('/earth', (req, res) => {
	res.render('earth.ejs', {
		element: 'Earth',
		traits: [ 'grounded', 'helpful', 'practical', 'realistic', 'materialistic', 'dependable' ],
		signs: [ 'Taurus', 'Virgo', 'Capricorn' ]
	});
});

app.use((req, res) => {
	res.send('404 error, page not found');
});

app.listen(2000, () => {
	console.log('Nodemon is running');
});
