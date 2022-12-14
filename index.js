//require express
//app config
const express = require("express");
const app = express();
const PORT = 3000;

const elements = {
  air: {
    signs: ["aquarius", "gemini", "libra"],
    traits: ["movement", "creativity", "action"],
  },
  water: {
    signs: ["pisces", "cancer", "scorpio"],
    traits: ["private", "mysterious", "pyshic"],
  },

  fire: {
    signs: ["aries", "leo", "sagitarius"],
    traits: ["a"],
  },
  earth: {
    signs: ["taurus", "virgo", "capricorn"],
    traits: ["b"],
  },
};

app.set("view engine", "ejs");
// GET /
app.get("/", (req, res) => {
  res.render("index.ejs");
});
app.use("/water", require("./controllers/water"));
app.use("/air", require("./controllers/air"));
app.use("/fire", require("./controllers/fire"));
app.use("/earth", require("./controllers/earth"));

//tell app which port to listen to
app.listen(PORT, () => {
  console.log(`listening for request on port ${PORT}`);
});
