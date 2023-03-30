const express= require("express")
const router = express.Router()

const fire ={
    type: 'fire',
    signs:['Leo', 'Aries', 'Sagittarius'],
    traits:['Passionate : Expresses emotions strongly and energetically.','Big frog says moo', 'Testing the different li functionality']
}


// main air route
//http GET url localhost/8000/fire
router.get("/", (req,res) =>{
    res.render("show", {element: fire})
})


router.get("/:sign", (req,res) => {
    res.send(req.params.sign)
})

module.exports = router