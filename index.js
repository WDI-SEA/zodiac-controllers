const express = require('express');
const ejsLayout = require('express-ejs-layouts');
const app = express();

// Middleware
app.set('view engine', 'ejs');
app.use(ejsLayout);

app.get('/', (req, res) => {
	res.render('index.ejs');
});

app.get('/water', (req, res) => {
	res.render('water.ejs', { traits: [ 'private', 'mysterious', 'psychic', 'charming', 'emotional', 'sensitive' ] });
});

app.get('/air', (req, res) => {
	res.render('air.ejs', {
		traits: [ 'movement', 'creativity', 'action', 'adventure', 'exciting', 'easily provoked' ]
	});
});

app.get('/fire', (req, res) => {
	res.render('fire.ejs', {
		traits: [ 'passionate', 'strong emotions', 'temperamental', 'energetic', 'accomplished', 'interesting' ]
	});
});

app.get('/earth', (req, res) => {
	res.render('earth.ejs', {
		traits: [ 'grounded', 'helpful', 'practical', 'realistic', 'materialistic', 'dependable' ]
	});
});

app.listen(3000, () => {
	console.log('Nodemon is running');
});
