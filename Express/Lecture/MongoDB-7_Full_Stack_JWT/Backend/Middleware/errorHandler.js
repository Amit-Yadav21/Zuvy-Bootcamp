const errorhandler = (err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }

  if (err.name === 'ValidationError') {
    return res.status(400).json({ message: err.message });
  }

  if (err.code === 11000) { // Ensure the code is numeric and matches MongoDB error codes
    return res.status(400).json({ message: 'User already exists' });
  }

  if (err.name === 'JsonWebTokenError') {
    return res.status(400).send({ message: "Invalid Token" })
  }

  if (!err.status) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
  return res.status(err.status).json({ message: err.message });
};
export default errorhandler;