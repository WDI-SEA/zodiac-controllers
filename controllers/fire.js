const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    let fireSigns = ["passionate", "strong emotions", "tempermental", "energetic", "energetic", "accomplished", "interesting"]
    res.render('fire/fire.ejs', {fireSigns})
})

router.get('/aries', (req,res)=>{

    res.render('fire/aeries.ejs')
})

router.get('/leo', (req,res)=>{

    res.render('fire/leo.ejs')
})

router.get('/sagittarius', (req,res)=>{

    es.render('fire/sagittarius')
})



module.exports = router;