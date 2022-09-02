const express = require('express');
const app = express();
const ejsLayouts = require('express-ejs-layouts');

app.set('view engine', 'ejs');
app.use(ejsLayouts);
const port = 8082;
app.get('/', (req, res) => {
    res.render('index')

})
app.get('/air', (req, res) => {
    // res.send('Aquarius Germini Libra || Movement Creativity Action Adventure Exciting Easily Provoked');
    res.render('air');
})

app.get('/water', (req, res) => {
    // res.send('Pisces Cancer Scorpio || Private Mysterious Pyshic Charming Emotional Sensitive');
    res.render('water');
})
app.get('/fire', (req, res) => {
    // res.send('Aries Leo Sagittarius || Passionate Strong Emotions Temperamental Energetic Accomplished Interesting');
    res.render('fire');
})
app.get('/earth', (req, res) => {
    // res.send('Taurus Virgo Capricorn || Grounded Helpful Practical Realistic Materialistic Dependable');
    res.render('earth');
})
app.listen(port, () => {
    console.log(`connected to ${port}`);
})