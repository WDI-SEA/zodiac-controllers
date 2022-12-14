const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    res.render("fire.ejs", {
      title: "Fire | Home",
      traits: [
        "Passionate",
        "Emotional",
        "Tempermental",
        "Energetic",
        "Accomplished",
        "Interesting",
      ],
    });
  } catch (error) {
    console.error(error);
  }
});

router.get("/leo", async (req, res) => {
  try {
    res.render("leo.ejs", {
      title: "Fire | Leo",
    });
  } catch (error) {
    console.error(error);
  }
});

router.get("/aries", async (req, res) => {
  try {
    res.render("aries.ejs", {
      title: "Fire | Aries",
    });
  } catch (error) {
    console.error(error);
  }
});

router.get("/sagittarius", async (req, res) => {
  try {
    res.render("sagittarius.ejs", {
      title: "Fire | Sagittarius",
    });
  } catch (error) {
    console.error(error);
  }
});
module.exports = router;
