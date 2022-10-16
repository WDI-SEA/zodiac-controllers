const express = require("express")
const ejsLayouts = require("express-ejs-layouts")
const app = express()

app.set("view engine", "ejs")
app.use("/water", require("./controllers/water"))
app.get("/water" ,(req,res)=>{
    res.send("water")
})


app.listen(4500, ()=>{
    console.log("App listening on port 4500 ")
})