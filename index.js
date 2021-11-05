//declare packages
const express = require("express")
const app = express()
const ejsLayouts = require("express-ejs-layouts")

//middleware
//set up ejs
app.set("view engine", "ejs")
app.use(ejsLayouts)
//set up controllers
app.use("/air", require("./controllers/air.js"))
app.use("/water", require("./controllers/water.js"))
app.use("/fire", require("./controllers/fire.js"))
app.use("/earth", require("./controllers/earth.js"))


//home
app.get("/", (req, res)=>{
    res.render("home.ejs")
})

//router + check
app.listen(8000, ()=>{
    console.log("router looks good")
})