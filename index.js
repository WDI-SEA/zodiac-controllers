const ejsLayouts = require("express-ejs-layouts")
const express = require("express")

const app = express()
const PORT = 3000

app.set("view engine", "ejs")

app.use(express.static("Public"))
app.use(ejsLayouts)

app.use("/water", require("./controllers/water"))
app.use("/air", require("./controllers/air"))
app.use("/earth", require("./controllers/earth"))
app.use("/fire", require("./controllers/fire"))

app.get("/", (req, res) => {
  res.render("index")
})

app.listen(PORT, () => console.log(`Active on localhost:${PORT}`))
