import express from 'express'
const router = express.Router()

router.get('/', (req, res) => {
    // res.cookie("test","amit yadav")
    res.cookie("test","amit yadav",{path:"/cookies"})
    // res.cookie("test","amit yadav",{path:"/cookies", maxAge:5000})
    // res.cookie("test","amit yadav",{path:"/cookies", maxAge:5000, httpOnly:true})
    res.json({msg:"cookies are set"})
});

router.get('/get-cookies', (req,res) =>{
    // console.log(req.headers.cookie); // get cookies in key and value 
    console.log(req.cookies); // get cookies in object format
    res.json({msg:"successfully get cookies..."})
})
 
export default router;