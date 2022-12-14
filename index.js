// set up express server
const express = require ('express')
const app = express ()
const PORT = 8080

const elements = {
    air: {
        signs: ['aquarius', 'gemini', 'libra'],
        traits: ['movement', 'creativity', 'action', 'adventure', 'exciting', 'easily provoked']
    },
    water: {
        signs: ['pisces', 'cancer', 'scorpio'],
        traits: ['pyshic', 'mysterious', 'private','charming', 'emotional', 'sensitive']
    },
    fire: {
        signs: ['ares', 'leo', 'sagittarius'],
        traits: ['passionate', 'strong emotions', 'temperamental', 'energetic', 'accomplished', 'interesting']
    },
    earth: {
        signs: ['taurus', 'virgo', 'capricorn'],
        traits: ['grounded', 'helpful', 'practical', 'realistic', 'materialistic', 'dependable']
    },

}

// set up controllers
app.use('/water', require ('./controllers/water'))
app.use('/fire', require ('./controllers/fire'))
app.use('/earth', require ('./controllers/earth'))
app.use('/air', require ('./controllers/air'))

// get / 
app.get('/', function(req, res){
    res.render('index.ejs')
})






// listener
app.listen(PORT, function(){
    console.log(`server is running on port: ${PORT}`)
})