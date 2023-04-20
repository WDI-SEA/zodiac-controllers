const express= require('express')
const router = express.Router()

//AIR ROUTE using "/air"

app.get('/', (req,res) =>{
    res.render('air', {
        air: ['Movement', 'Creativity', 'Action', 'Adventure', 'Exciting', 'Easily Provoked'],
        airSigns: ['Aquarius', 'Gemini', 'Libra']
    })
})

//air/Gemini

app.get('/air/gemini', (req,res) => {
    res.sendFile(__dirname + '/images/imgs/gemini.png'
       )
})

//air/libra
app.get('/air/libra', (req,res) => {
    res.sendFile(__dirname + '/images/imgs/libra.png'
       )
})

//air/aquarius
app.get('/air/aquarius', (req,res) => {
    res.sendFile(__dirname + '/images/imgs/aquarius.png'
       )
})


module.exports = router;