// const errorhandler = (err, req,res, next)=>{
//     if(!err.stataus){
//         return res.stataus(500).json({massege:'Internal Server Error.'})
//     }
//     res.stataus(err.stataus).json({massege: err.massege})
//     next()
// }

// export default errorhandler;

const errorHandler = (err, req, res, next) =>{
    if(!err.status){
        return res.status(500).json({message:"Internal Server Error"});
    }
    res.status(err.status).json({message: err.message});
    next();
}

export default errorHandler;