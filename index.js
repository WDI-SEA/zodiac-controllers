const express = require('express')
const app = express()
const PORT = 4000

const elements = {
    air: {
        signs: ['aquarius', 'gemini', 'libra'],
        traits: ['movement', 'creatvity', 'action']
    },
    water: {
        signs: ['pisces', 'cancer', 'scorpio'],
        traits: ['private', 'mysterious', 'action']
    },
    fire: {
        signs: ['aries', 'leo', 'sagittarius'],
        traits: ['movement', 'creatvity', 'action']
    },
    earth: {
        signs: ['taurus', 'virgo', 'capricorn'],
        traits: ['movement', 'creatvity', 'action']
    }
}   

app.use(express.static('public'))

app.use('/water', require('./controllers/water'))
app.use('/fire', require('./controllers/fire'))
app.use('/earth', require('./controllers/earth'))
app.use('/air', require('./controllers/air'))



app.set('view engine', 'ejs')

app.get('/', (req, res) =>{
    res.render("index.ejs")
})

app.listen(PORT, ()=>{
    console.log(`listening on PORT ${PORT}`)
})