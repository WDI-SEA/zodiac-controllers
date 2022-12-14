const express = require('express')
const app = express()

app.set('view engine','ejs')
app.use(express.static(__dirname + '/public'))

app.get('/',async(req,res)=>{
    res.render('index.ejs')
})

app.listen(8000,()=>{
    console.log('listening for requests on port 8000')
})