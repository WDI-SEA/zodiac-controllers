const PORT = 8000;

// setting up express
const express = require('express');
const app = express();

// require ejs layouts
const ejslayouts = require('express-ejs-layouts');
const res = require('express/lib/response');

//middleware to set up ejs and ejs layouts
app.use(ejslayouts)
app.set('view engine', 'ejs');

// ROUTES

// home
app.get('/', (req, res)=> {
    res.render('index.ejs')
});

// water
app.get('/water', (req, res)=> {
    res.render('./water/index.ejs', {
        element: 'Water',
        signs: ['Pisces', 'Cancer', 'Scorpio'],
        traits: ['private', 'mysterious', 'psychic', 'charming', 'emotional', 'sensitive'],
    })
});

// air
app.get('/air', (req, res)=> {
    res.render('./air/index.ejs', {
        element: 'Air',
        signs: ['Aquarius', 'Gemini', 'Libra'],
        traits: ['movement', 'creativity', 'action', 'adventure', 'exciting', 'easily provoked']
    })
});

// fire
app.get('/fire', (req, res)=> {
    res.render('./fire/index.ejs', {
        element: 'Fire',
        signs: ['Aries', 'Leo', 'Sagittarius'],
        traits: ['passionate', 'strong emotions', 'temperamental', 'energetic', 'accomplished', 'interesting'],
    })
});

app.get('/earth', (req, res)=> {
    res.render('./earth/index.ejs', {
        element: 'Earth',
        signs: ['Taurus', 'Virgo', 'Capricorn'],
        traits: ['grounded', 'helpful', 'practical', 'realistic', 'materialistic', 'dependable'],
    })
});

// very very last middleware is a 404
app.use((req, res) => {
    res.send('404 error -- page not found')
})

app.listen(PORT, err => {
    if (err) console.log(err)
    console.log(`Port ${PORT} is aliving and thriving`);
});