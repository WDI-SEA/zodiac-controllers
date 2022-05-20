// required packages
const express = require('express')
const ejsLayouts = require('express-ejs-layouts')

// app config
const app = express()
const PORT = 3000
app.set('view engine', 'ejs')

// middlewares
app.use(ejsLayouts)

// routes
app.get('/', (req, res) => {
	res.render('index.ejs')
})

app.get('/water', (req, res) => {
	res.render('water.ejs', {
		element: 'Water',
		signs: ['Pisces', 'Cancer', 'Scorpio'],
		traits: ['private', 'mysterious', 'psychic', 'charming', 'emo', 'sensitive']	
	})
})

app.get('/air', (req, res) => {
	res.render('air.ejs', {
		element: 'Air',
		signs: ['Aquarius', 'Gemini', 'Libra'],
		traits: ['movement', 'creativity', 'action', 'adventure', 'exciting', 'easily provoked']	
	})
})

app.get('/fire', (req, res) => {
	res.render('fire.ejs', {
		element: 'Fire',
		signs: ['Aries', 'Leo', 'Sagittarius'],
		traits: ['passionate', 'strong emotions', 'tempermental', 'energetic', 'accomplished', 'interesting']	
	})
})

app.get('/earth', (req, res) => {
	res.render('earth.ejs', {
		element: 'Earth',
		signs: ['Taurus', 'Virgo', 'Capricorn'],
		traits: ['grounded', 'helpful', 'practical', 'realistic', 'materialistic', 'dependable']	
	})
})

// listening on a port
app.listen(PORT, () => console.log(`listening on port ${PORT} 🎧`))