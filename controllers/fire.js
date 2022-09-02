const express = require('express')
const router = express.Router()


router.get("/fire", (req, res) => {
    res.render("fire", {signs: ['Aries', 'Leo', 'Sagittarius']})
})

module.exports = router;