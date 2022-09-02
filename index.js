const express = require('express');
const app = express();

const PORT = 8000

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('homepage')
});

app.get("/air", (request, response) => {

    response.render('air')

})

app.get("/earth", (request, response) => {

    response.render('earth')

})

app.get("/fire", (request, response) => {

    response.render('fire')

})

app.get("/water", (request, response) => {

    response.render('water')

})

app.listen(PORT, (req,res) => {
    console.log(`Port ${PORT} is working`)
})
