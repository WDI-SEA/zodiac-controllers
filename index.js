const express = require('express')

const layout = require('express-ejs-layouts')

const app = express()
const PORT = 8003

app.set('view engine', 'ejs')

app.use(layout)

app.get('/', (req, res) => {
    res.render("index")
})

app.get('/air', (req, res) => {
    res.render("air", {airTrait: ["movement", "creativity", "action", "adventure", "exciting", "easily provoked"]})
})

app.get('/water', (req, res) => {
    res.render("water", {waterTrait: ["private", "mysterious", "psycic", "charming", "emotional", "sensitive"]})
})

app.get('/earth', (req, res) => {
    res.render("earth", {earthTrait: ["passionate", "strong emotions", "tempermental", "energetic", "accomplished", "interesting"]})
})

app.get('/fire', (req, res) => {
    res.render("fire", {fireTrait: ["grounded", "helpful", "practical", "realistic", "materialistic", "dependable"]})
})


// Tell express to listen on a port for incoming reports (Goes at the bottom)
app.listen(PORT, () => {
    console.log(`The Express app is running on port ${PORT}!`)
})