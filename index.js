const express = require ("express")
const router = express.Router();
// const ejsLayouts = require('express-ejs-layouts');
const app = express()
const PORT = 8088

app.set('view engine', 'ejs')
app.use(express.static("public"))
// app.use(ejsLayouts)


app.use('/water', require('./controllers/water'));
app.use('/air', require('./controllers/air'));
app.use('/fire', require('./controllers/fire'));
app.use('/earth', require('./controllers/earth.js'));



app.get('/', (req, res) => {
    res.render('index.ejs', {
        title: "Zodiac Fun"
    });
  });
  

  app.listen(8088, () => {
    console.log('Server started on port 8088');
  });


  module.exports = router;