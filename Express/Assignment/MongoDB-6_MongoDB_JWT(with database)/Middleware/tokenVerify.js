import jwt from 'jsonwebtoken';

const tokenVerify = (req, res, next) => {
    try {
        const authHeader = req.get('Authorization') || req.headers['authorization'];
        if (!authHeader) {
            return res.status(401).json({ msg: 'Token not found' });
        }

        const token = authHeader.split(' ')[1];
        if (!token) {
            return res.status(401).json({ msg: 'Malformed token' });
        }

        const data = jwt.verify(token, 'amityadav222137');
        req.jwtData = data;
        next();
    } catch (err) {
        console.error('JWT Verification Error:', err);
        res.status(403).json({ msg: 'Invalid or expired token' });
    }
};

export default tokenVerify;