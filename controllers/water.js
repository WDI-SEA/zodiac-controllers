const express = require('express')
const router = express.Router()


router.get("/water", (req, res) => {
    res.render("water", {signs: ['Pisces', 'Cancer', 'Scorpio']})
})

module.exports = router;