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

//Controllers
app.use('/air', require('./controllers/air'));
app.use('/Water', require('./controllers/water'));

//Routes
app.get('/', (req, res) => { res.render('home', { title: "Home Page" }); });


app.get('/Fire', function (req, res) {
  res.render('fire', { title: data[2].title, traits: data[2].traits, signs: data[2].signs });
});

app.get('/Earth', function (req, res) {
  res.render('earth', { title: data[3].title, traits: data[3].traits, signs: data[3].signs });
});

app.listen(port, () => console.info(`Hello, Bahrain.  I'm listening on port...${port}`))