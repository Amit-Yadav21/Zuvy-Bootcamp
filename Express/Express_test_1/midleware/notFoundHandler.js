const notFoundHandler = (req, res, next)=>{
    res.status(404).json({msg:'Path Not found. Plese correct it.'})
    next();
}

export default notFoundHandler;