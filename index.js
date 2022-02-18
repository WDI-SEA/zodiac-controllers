const express = require('express')
const app = express()
const ejsLayouts = require('express-ejs-layouts')

app.set('view engine', 'ejs')
app.use(ejsLayouts)


app.get('/', (req,res)=>{
    res.render("index.ejs")
})
app.get('/air', (req,res)=>{
    const air = ['movement','creativity','action','adventure','exciting','easily provoked']
    res.render("air.ejs",{air})
})
app.get('/water', (req,res)=>{
    const water = ['private','mysterious','pyshic','charming','emotional','sensitive']
    res.render("water.ejs",{water})
})
app.get('/fire', (req,res)=>{
    const fire = ['passionate','strong emotions','temperamental','energetic','accomplished','interesting']
    res.render("fire.ejs",{fire})
})
app.get('/earth', (req,res)=>{
    const earth = ['grounded','helpful','practical','realistic','materialistic','dependable']
    res.render("earth.ejs",{earth})
})

app.listen(8000, ()=>{
    console.log('server up and running')
})