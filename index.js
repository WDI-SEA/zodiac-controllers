const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");

app.use(express.static('public'))

app.use("/water", require("./controllers/water"));
app.use("/air", require("./controllers/air"));
app.use("/fire", require("./controllers/fire"));
app.use("/earth", require("./controllers/earth"));

app.get("/", (req, res) => {
  res.render("index", {
    title: "home page",
  });
});

app.listen(PORT, () => {
  console.log("ahem...is this thing on?");
});
