const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.listen(PORT, ()=> {
    console.log(`intruder in sector ${PORT}`)
})

const fireThings = []
const waterThings = []
const airThings = []
const earthThings = []


app.get('/', (req, res) => {
    res.render()
})