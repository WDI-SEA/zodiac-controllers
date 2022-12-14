const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    res.render("earth.ejs", {
      title: "Earth | Home",
      traits: [
        "Grounded",
        "Helpful",
        "Practical",
        "Realistic",
        "Materialistic",
        "Dependable",
      ],
    });
  } catch (error) {
    console.error(error);
  }
});

router.get("/taurus", async (req, res) => {
  try {
    res.render("taurus.ejs", {
      title: "Earth | Taurus",
    });
  } catch (error) {
    console.error(error);
  }
});

router.get("/virgo", async (req, res) => {
  try {
    res.render("virgo.ejs", {
      title: "Earth | Virgo",
    });
  } catch (error) {
    console.error(error);
  }
});

router.get("/capricorn", async (req, res) => {
  try {
    res.render("capricorn.ejs", {
      title: "Earth | Capricorn",
    });
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
