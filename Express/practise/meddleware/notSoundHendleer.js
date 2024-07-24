const notFoundHendler = (req, res, next) =>{
    res.status(404).json({massege:'Router Path not found...'})
    next();
}

export default notFoundHendler;