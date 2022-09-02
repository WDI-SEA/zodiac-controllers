 //  import the required packages
const express = require('express')
// create an instance of an express app
const app = express()
const PORT = 8000

const elements = {
    air: {
        name: "air",
        signs: ["aquarius", "gemini", "libra"],
        traits: ["movement", "creativity", "action", "adventure", "exciting", "easily provoked"]
    },
    water: {
        name: "water",
        signs: ["pisces", "cancer", "scorpio"],
        traits: ["private", "mysterious", "pyshic", "charming", "emotional", "sensitive"]
    },
    fire: {
        name: "fire",
        signs: ["aries", "leo", "sagittarius"],
        traits: ["passionate", "strong emotions", "tempermental", "energetic", "accompli,sed", "interesting"]
    },
    earth: {
        name: "earth",
        signs: ["taurus", "virgo", "capricorn"],
        traits: ["grounded", "helpful", "practical", "realistic", "materialistic", "dependable"]
    }
}

// home route = localhost:8000/
// HTTP verb = GET    URL pattern = '/'

//  define express routes???

// home route = localhost:8000/
// HTTP verb = GET    URL pattern = '/'
app.get('/', (req, res) => {
    // console.log('Welcome nighthawks, we have been expecting you🎩')
    res.send('It works! ha ha, IT WORKS! I FINALLY invent something that works!')
})
// home route = localhost:8000/
// HTTP verb = GET    URL pattern = '/air'
app.get('/air', (req, res) => {
    // console.log('Welcome nighthawks, we have been expecting you🎩')
    res.send('AIR')
})
// home route = localhost:8000/
// HTTP verb = GET    URL pattern = '/water'
app.get('/water', (req, res) => {
    // console.log('Welcome nighthawks, we have been expecting you🎩')
    res.send('WATER')
})
// home route = localhost:8000/
// HTTP verb = GET    URL pattern = '/fire'
app.get('/fire', (req, res) => {
    // console.log('Welcome nighthawks, we have been expecting you🎩')
    res.send('FIRE')
})
// home route = localhost:8000/
// HTTP verb = GET    URL pattern = '/earth'
app.get('/earth', (req, res) => {
    // console.log('Welcome nighthawks, we have been expecting you🎩')
    res.send('EARTH')
})

// tell express to listen on a port for incoming http requests
app.listen(PORT, () => {
    console.log(`Welcome to the nest on port ${PORT} nighthawk 🎩`)
})

// const zodiac = ['Air', 'Water', 'Fire', 'Earth'];
// zodiac.forEach(Array ('click') => {
//     console.log(zodiac)
// })