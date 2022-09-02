const express = require('express');
const app = express();
const wTrait = ['private','mysterious','pyshic','charming','emotional','sensitive']
const PORT = 8000

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('homepage')
});

const aTrait = ['movement','creativity','action','adventure','exciting','easily provoked']
app.get("/air", (request, response) => {

    response.render('air', {traits:aTrait})

})

// const wTrait = ['private','mysterious','pyshic','charming','emotional','sensitive']
app.get("/water", (request, response) => {

    response.render('water', {traits: wTrait})

})

const fTrait = ['passionate','strong emotions','temperamental','energetic','accomplished','interesting']
app.get("/fire", (request, response) => {

    response.render('fire', {traits:fTrait})

})

const eTrait = ['grounded','helpful','practical','realistic','materialistic','dependable']
app.get("/earth", (request, response) => {

    response.render('earth', {traits:eTrait})

})





app.listen(PORT, (req,res) => {
    console.log(`Port ${PORT} is working`)
})
