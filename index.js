// import the required packages
const express = require('express')

// create an instance of an express
const app = express()
const PORT = 3001

const traitsAArr = ['movement', 'creativity', 'adventure', 'exiting', 'easily provoked']
const traitsFArr = ['passionate','strong emotions', 'temperamental', 'energetic','accomplished', 'interesting']
const traitsWArr = ['private', 'mysterious', 'pyshc', 'charming', 'emotional', 'sensitive']
const traitsEArr = ['grounded', 'helpful', 'practical', 'realistic', 'materialistic', 'dependable']

const linkArr = ['Water', 'Air', 'Fire', 'Earth']
// configure app to use ejs
app.set('view engine', 'ejs')
// define express routes
app.get('/', (req,res) => {
    res.render('home', {links: linkArr})
})

app.get('/air',(req,res) => {
    res.render('air',{trates: traitsAArr})
})

app.get('/earth',(req,res) => {
    res.render('earth', {trates: traitsEArr})
})

app.get('/fire',(req,res) => {
    res.render('fire', {trates: traitsFArr})
})

app.get('/water',(req,res) => {
    res.render('water', {trates: traitsWArr})
})







// tell express to listen on a port for incoming request
app.listen(PORT, () => {
    console.log(`express app is running around like little tosh on port ${PORT}`)
})