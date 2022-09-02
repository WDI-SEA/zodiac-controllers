const express = require("express");
const ejsLayouts = require("express-ejs-layouts");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");    // Set view engine to EJS
app.use(ejsLayouts);
app.use(express.static("public"));

// Controllers
app.use("/water", require("./controllers/water"));
app.use("/earth", require("./controllers/earth"));
app.use("/fire", require("./controllers/fire"));
app.use("/air", require("./controllers/air"));

// Routes
app.get("/", (req, res) =>
{
    res.render("index");
})

// Web application listening
app.listen(PORT, () =>
{
    console.log(`Express server for Zodiac Controllers listening on Port ${PORT}`);
})