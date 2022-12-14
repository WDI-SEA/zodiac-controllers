const express = require("express");
const app = express();
let path = require("path");
// set templating engine
app.set("view engine", "ejs");
// set path to views folder
app.set("views", path.join(__dirname, "/views"));
// Create static folder
app.use(express.static(__dirname + "/public"));

// ROUTES
app.get("/", async (req, res) => {
  try {
    res.render("index.ejs", {
      title: "Elements | Home",
    });
  } catch (error) {
    console.error(error);
  }
});
// CONTROLLERS
app.use("/air", require("./controllers/air"));
app.use("/water", require("./controllers/water"));
app.use("/earth", require("./controllers/earth"));
app.use("/fire", require("./controllers/fire"));

app.listen(8000, () => {
  console.log("listening for requests on port 8000");
});
