const express = require('express')
const app = express()
const PORT = 8000

app.set("view engine", "ejs")
app.use(express.static("public"))

app.use("/water", require("./controllers/water"))
app.use("/air", require("./controllers/air"))
app.use("/fire", require("./controllers/fire"))
app.use("/earth", require("./controllers/earth"))

app.get("/", (req, res) => {
    res.render(__dirname + `/views/index.ejs`)
})

app.get("/water", (req,res) => {
    res.render('water.ejs', {
        traits: ['Private', 'Mysterious', 'Psychic', 'Charming', 'Emotional', 'Sensitive']
    })
})

app.get("/air", (req,res) => {
    res.render('air.ejs', {
        traits: ['Movement', 'Creativity', 'Action', 'Adventure', 'Exciting', 'Easily Provoked']
    })
})

app.get("/fire", (req,res) => {
    res.render('fire.ejs', {
        traits: ['Passionate', 'Strong Emotions', 'Temperamental', 'Energetic', 'Accomplished', 'Interesting']
    })
})

app.get("/earth", (req,res) => {
    res.render('earth.ejs', {
        traits: ['Grounded', 'Helpful', 'Practical', 'Realistic', 'Materialistic', 'Dependable']
    })
})




// listener
app.listen(PORT, () => {
    console.log(`Yo yo yo welcome to port ${PORT}`)
})