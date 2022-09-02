const express = require('express')

const app = express()
console.log(app)
const PORT = 8000

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', {title: "Let\'s Learn about the Zodiac!", airLink: "localhost:8000/air", fireLink:"localhost:8000/fire", earthLink:"localhost:8000/earth", waterLink:"localhost:8000/water" });
  });

app.get('/air', (req, res) => {
    res.render('air', {title: 'Air Signs', traits: ["movement", "creativity", "action", "adventure", "exciting", "easily provoked"], signs: ["Aquarius", "Libra", "Gemini"]})
})

app.get('/fire', (req, res) => {
    res.render('fire', {title: 'Fire Signs', traits: ["passionate", "strong emotions", "tempermental", "energetic", "accomplished", "interesting"], signs: ["Aries", "Leo", "Sagittarius"]})
})

app.get('/earth', (req, res) => {
    res.render('earth', {title: 'Earth Signs', traits: ["grounded", "helpful", "practical", "realistic", "materialistic", "dependable"], signs: ["Taurus", "Virgo", "Capricorn"]})
})

app.get('/water', (req, res) => {
    res.render('water', {title: 'Water Signs', traits: ["private", "mysterious", "pyshic", "charming", "emotional", "sensitive"], signs: ["Cancer", "Pisces", "Scorpio"]})
})

app.listen(PORT, () => {
    console.log("Of port the page is runninng")
})