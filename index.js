const express = require('express')
const app = express()
const PORT = 4000

app.set('view engine', 'ejs')

app.get('/', (req, res) =>{
    res.render("index.ejs")
})

app.use('/watersign', require('./controllers/waterSign'))
app.use('/firesign', require('./controllers/fireSign'))
app.use('/earthsign', require('./controllers/earthSign'))
app.use('/airsign', require('./controllers/airSign'))

app.listen(PORT, ()=>{
    console.log(`listening on PORT ${PORT}`)
})