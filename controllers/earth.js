const express= require('express')
const router = express.Router()

//earth/ Taurus

app.get('/earth/taurus', (req,res) => {
    res.render('gPhoto', {
       earth: 'taurus is awsome' 
    })
})

//earth/ Virgo
app.get('/earth/virgo', (req,res) => {
    res.render('lPhoto', {
       earth: 'virgo is awsome' 
    })
})

//earth/capricorn
app.get('/earth/capricorn', (req,res) => {
    res.render('aPhoto', {
       earth: 'capricorn is awsome' 
    })
})

module.exports = router