// Middleware to check if user is authenticated
export const checkAuthenticated = (req, res, next) => {
    if (req.session.user) {
        return next();
    }
    res.status(401).json({ message: 'Unauthorized. User not logged In' });
};

// Middleware to check user's role
export const checkRole = (role) => (req, res, next) => {
    if (req.session.user && req.session.user.role === role) {
        return next();
    }
    res.status(403).json({ message: 'Only admin can add, update, delete books' });
};
