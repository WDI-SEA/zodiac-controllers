const express = require("express");
// create router
const router = express.Router();

router.get("/csncer", (req, res) => {
  res.send("cancer");
});
router.get("/scorpio", (req, res) => {
  res.send("scorpio");
});
router.get("/pisces", (req, res) => {
  res.send("pisces");
});
// export router
module.exports = router;
