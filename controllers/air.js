const express = require("express");
const router = express.Router();

//air
router.get("/", async (req, res) => {
  try {
    res.render("air", {
      title: "Air | Home",
      traits: [
        "Movement",
        "Creativity",
        "Action",
        "Adventure",
        "Exciting",
        "Provokable",
      ],
    });
  } catch (error) {
    console.error(error);
  }
});

router.get("/gemini", async (req, res) => {
  try {
    res.render("gemini.ejs", {
      title: "Air | Gemini",
    });
  } catch (error) {
    console.error(error);
  }
});

router.get("/libra", async (req, res) => {
  try {
    res.render("libra.ejs", {
      title: "Air | Libra",
    });
  } catch (error) {
    console.error(error);
  }
});

router.get("/aquarius", async (req, res) => {
  try {
    res.render("aquarius.ejs", {
      title: "Air | Aquarius",
    });
  } catch (error) {
    console.error(error);
  }
});
module.exports = router;
