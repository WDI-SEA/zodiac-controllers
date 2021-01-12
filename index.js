const express = require('express')
const app = express();
const layout = require('express-ejs-layouts')

app.set('view engine', 'ejs')
app.use(layout)
app.use('/air', require('./controllers/air'))
app.use('/earth', require('./controllers/earth'))
app.use('/fire', require('./controllers/fire'))
app.use('/water', require('./controllers/water'))

app.get('/', (req, res) => {
    res.render('index.ejs')
});

app.listen(3000);
console.log("You're listening to port 3000!");