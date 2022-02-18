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
    let waterTraits = ['private', 'mysterious', 'psychic', 'charming', 'emotional', 'sensitive']
    res.render('water.ejs', {waterTraits})
});

// air
app.get('/air', (req, res)=> {
    let airTraits = ['movement', 'creativity', 'action', 'adventure', 'exciting', 'easily provoked']
    res.render('air.ejs', {airTraits})
});

// fire
app.get('/fire', (req, res)=> {
    let fireTraits = ['passionate', 'strong emotions', 'temperamental', 'energetic', 'accomplished', 'interesting']
    res.render('fire.ejs', {fireTraits})
});

// earth
app.get('/earth', (req, res)=> {
    let earthTraits = ['grounded', 'helpful', 'practical', 'realistic', 'materialistic', 'dependable']
    res.render('earth.ejs', {earthTraits})
});


app.listen(PORT, ()=> {
    console.log('Port 8000 is aliving and thriving')
})