const express = require('express')
const app = express()
const PORT = 8080

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home.ejs')
})

app.get('/water', (req, res) => {
    res.render('water', {
        traits: ['private', 'mysterious', 'pyshic', 'charming', 'emotional', 'sensetive']
    })
})

app.get('/air', (req, res) => {
    res.render('air', {
        traits: ['movement', 'creativity', 'action', 'adventure', 'exciting', 'seasily provoked']
    })
})

app.get('/fire', (req, res) => {
    res.render('fire', {
        traits: ['passionate', 'strong emotions', 'tempermental', 'energetic', 'accomplished', 'interesting']
    })
})


app.get('/earth', (req, res) => {
    res.render('earth', {
        traits: ['grounded', 'helpful', 'practical', 'realistic', 'materialistic', 'dependable']
    })
})








app.listen(PORT, function(){
    console.log(`Server ${PORT} linked`)
})