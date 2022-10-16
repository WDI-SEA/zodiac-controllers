const express = require("express")
const app = express()
PORT = 8000

const ejsLayout = require("express-ejs-layouts")
app.use(ejsLayout)

app.set("view engine", "ejs")

app.use("/water", require("./controllers/water.js"))
app.use("/air", require("./controllers/air.js"))
app.use("/fire", require("./controllers/fire.js"))
app.use("/earth", require("./controllers/earth.js"))

app.get("/", (req, res)=>{
    res.render("index.ejs")
})

app.listen(PORT, ()=>{
    console.log("Listening ....")
})