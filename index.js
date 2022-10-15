const express = require("express")
var expressLayouts = require('express-ejs-layouts');

const app = express()
const port = 8000
//setting up express-ejs-layouts
app.set("view engine","ejs");
app.set("views","views");
app.set('layout', 'layout.ejs');

app.use(expressLayouts);


app.listen(port,()=>{
    console.log("Houston, we don't have a problem!")
})
app.get("/water", (req,res)=>{
    res.render("fire" , {content:["Charming","Emotional","Private","Mysterious"]})
})
app.get("/air", (req,res)=>{
res.render("air" ,{content:["movement", "creatvity","action","adventure"]})
})
app.get("/earth", (req,res)=>{
res.render("earth",{content:["Grounded","Helpful","Practical","Realistic"]})
})
app.get("/fire", (req,res)=>{
    res.render("fire" , {content:["Passionate", "Strong emotions","Temperamental","Accomplished"]})
    })
    app.get('/', function(req, res) {
        res.render('index', {link: '/fire'});
      });



  