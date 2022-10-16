const express = require("express")
var expressLayouts = require('express-ejs-layouts');

const app = express()
const port = 8000
//setting up express-ejs-layouts
app.set("view engine","ejs");
app.set("views","views");
app.set('layout', 'layout.ejs');

app.use(expressLayouts);


app.listen(port,()=>{
    console.log("Houston, we don't have a problem!")
})
    app.get('/', function(req, res) {
        res.render('index');
      });
      app.use('/fire', require('./controllers/fire.ejs'))
      app.use('/water', require('./controllers/water.ejs'))
      app.use('/air', require('./controllers/air.ejs'))
      app.use('/earth', require('./controllers/earth.ejs'))





  