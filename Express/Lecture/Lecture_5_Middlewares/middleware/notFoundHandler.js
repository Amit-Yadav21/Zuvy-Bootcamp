const notFoundHandler = (req, res, next) => {
    res.status(404).json({message: 'Router Path Not Found'});
    next();
};

export default notFoundHandler;  