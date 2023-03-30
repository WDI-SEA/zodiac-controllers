const express= require('express')
const router = express.Router()

//air/Gemini

app.get('/air/gemini', (req,res) => {
    res.render('gPhoto', {
       air: 'Gemini is awsome' 
    })
})

//air/libra
app.get('/air/libra', (req,res) => {
    res.render('lPhoto', {
       air: 'Libra is awsome' 
    })
})

//air/aquarius
app.get('/air/aquarius', (req,res) => {
    res.render('aPhoto', {
       air: 'Aquarius is awsome' 
    })
})


module.exports = router