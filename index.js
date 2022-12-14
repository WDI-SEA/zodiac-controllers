const express = require('express')
const app = express()
let path = require('path')

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'/views'))
app.use(express.static(__dirname + '/public'))

app.get('/',async(req,res)=>{
    try {
        res.render('index.ejs')
    } catch (error) {
        console.error(error)
    }
})

//water
app.get('/water',async(req,res)=>{
    try {
        res.render('water')
    } catch (error) {
        console.error(error)
    }
})
//air 
app.get('/air',async(req,res)=>{
    try {
        res.render('air')
    } catch (error) {
        console.error(error)
    }
})
//earth
app.get('/earth',async(req,res)=>{
    try {
        res.render('earth')
    } catch (error) {
        console.error(error)
    }
})
//fire
app.get('/fire', async(req,res)=>{
    try {
        res.render('fire')
    } catch (error) {
        console.error(error)
    }
})
app.listen(8000,()=>{
    console.log('listening for requests on port 8000')
})