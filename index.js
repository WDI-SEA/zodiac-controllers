const express = require('express')
const app = express()
app.set('view engine','ejs')
const elements = {
    air:{
        signs: ['aquarius','gemini','libra'],
        traits:['movement','creativity','action']
    },
    water:{
        signs: ['pisces','cancer','scorpio'],
        traits: ['private','mysterious','pyshic']
    },
    fire:{
        signs: ['aries','leo','sagittarius'],
        traits: ['passionate','strong','tempermental']
    },
    earth:{
        signs:['taurus','virgo','capricorn'],
        traits:['grounded','helpful','practical']
    }
}
app.use(express.static('public'))
app.use('/water',require('./controllers/water'))
app.use('/air',require('./controllers/air'))
app.use('/fire',require('./controllers/fire'))
app.use('/earth',require('./controllers/earth'))
app.get('/',function(req,res){
    res.render('index.ejs')
})
// app.use('/water', require('./controllers/water'))
// app.use('/air', require('./controllers/air'))
// app.use('/fire', require('./controllers/fire'))
// app.use('/earth', require('./controllers/earth'))





app.listen(8000, function(){
console.log('running server')
})