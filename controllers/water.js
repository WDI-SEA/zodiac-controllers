const express= require("express")
const router = express.Router()

const water ={
    type: 'water',
    signs:['Cancer', 'Scorpio', 'Pisces'],
    traits:['Able to perceive things beyond the natural senses.','Capable of understanding and feeling the emotions of others.','Big frog says moo', 'Testing the different li functionality']
}


// main air route
//http GET url localhost/8000/water
router.get("/", (req,res) =>{
    res.render("show", {element: water})
})


router.get("/:sign", (req,res) => {
    res.send(req.params.sign)
})

module.exports = router