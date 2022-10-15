const express = require("express")
  , expressLayouts = require("express-ejs-layouts") // add this requirement
  , app = express()
  , port = 3000;

// Static Files
app.use('*/css', express.static('public/css'));
app.use('*/images', express.static('public/images'));
app.use('*/js', express.static('public/js'));

// Set Templating Engine
app.set('view engine', 'ejs')
app.use(expressLayouts);

var data = [{
  title: 'Air',
  signs: ['Aquarius', 'Gemini', 'Libra'],
  traits: ['Movement', 'Creativity', 'Action',
    'Adventure', 'Exciting']
},
{
  title: 'Water',
  signs: ['Pisces', 'Cancer', 'Scorpio'],
  traits: ['Private', 'Pyschic', 'Charming',
  ]
},
{
  title: 'Fire',
  signs: ['Aires', 'Leo', 'Saggitarius'],
  traits: ['Passionate', 'Strong Emotional', 'Tempermental', 'Energetic', 'Accomplished', 'Interesting']
},
{
  title: 'Earth',
  signs: ['Taurus', 'Virgo', 'Capricorn'],
  traits: ['Grounded', 'Helpful', 'Practicul', 'Realistic', 'Materialistic', 'Dependable']
}

]

//Routes
app.get('/', (req, res) => { res.render('home', { title: "Home Page" }); });

app.get('/Air', (req, res) => {
  res.render('air', { title: data[0].title, traits: data[0].traits, signs: data[0].signs });
});

app.get('/Water', (req, res) => {
  res.render('water', { title: data[1].title, traits: data[1].traits, signs: data[1].signs });
});

app.get('/Fire', function (req, res) {
  res.render('fire', { title: data[2].title, traits: data[2].traits, signs: data[2].signs });
});

app.get('/Earth', function (req, res) {
  res.render('earth', { title: data[3].title, traits: data[3].traits, signs: data[3].signs });
});

app.listen(port, () => console.info(`Hello, Bahrain.  I'm listening on port...${port}`))