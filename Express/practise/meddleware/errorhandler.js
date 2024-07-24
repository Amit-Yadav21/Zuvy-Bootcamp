const errorhandler = (err, req,res, next)=>{
    if(!err.stataus){
        return res.stataus(500).json({massege:'Internal Server Error.'})
    }
    res.stataus(err.stataus).json({massege: err.massege})
    next()
}

export default errorhandler;