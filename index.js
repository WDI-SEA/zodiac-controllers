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

app.use(express.static('public'));
app.use('/water', require('./controllers/waterController'));
app.use('/air', require('./controllers/airController'));
app.use('/fire', require('./controllers/fireController'));
app.use('/earth', require('./controllers/earthController'));

app.get('/', (req, res) => {
	res.render('index.ejs');
});

app.get('/water', (req, res) => {
	res.render('water.ejs', {
		element: 'water',
		traits: [ 'private', 'mysterious', 'psychic', 'charming', 'emotional', 'sensitive' ],
		signs: [ 'pisces', 'cancer', 'scorpio' ]
	});
});

app.get('/air', (req, res) => {
	res.render('air.ejs', {
		element: 'air',
		traits: [ 'movement', 'creativity', 'action', 'adventure', 'exciting', 'easily provoked' ],
		signs: [ 'aquarius', 'gemini', 'libra' ]
	});
});

app.get('/fire', (req, res) => {
	res.render('fire.ejs', {
		element: 'fire',
		traits: [ 'passionate', 'strong emotions', 'temperamental', 'energetic', 'accomplished', 'interesting' ],
		signs: [ 'aries', 'leo', 'sagittarius' ]
	});
});

app.get('/earth', (req, res) => {
	res.render('earth.ejs', {
		element: 'earth',
		traits: [ 'grounded', 'helpful', 'practical', 'realistic', 'materialistic', 'dependable' ],
		signs: [ 'taurus', 'virgo', 'capricorn' ]
	});
});

app.use((req, res) => {
	res.send('404 error, page not found');
});

app.listen(5000, () => {
	console.log('Nodemon is running');
	console.log(__dirname);
});
