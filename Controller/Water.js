const router = express.router()

//controller

const signs = ['pisces', 'aquarius', 'gemini']


router.get('/', (req,res)=>{
    res.render('water.ejs', {signslist: signs})
})


router.get('/pisces', (req,res) =>{
    const url ='https://hips.hearstapps.com/hmg-prod/images/cancer-zodiac-sign-abstract-night-sky-background-royalty-free-image-858078918-1560803578.jpg'

    res.render('image.ejs', {url: url})
})



module.exports = router;