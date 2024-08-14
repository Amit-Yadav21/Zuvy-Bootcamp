// import jwt from 'jsonwebtoken';

// const tokenVerify = (req, res, next) => {
//     try {
//         const authHeader = req.get('Authorization') || req.headers['authorization'];
//         if (!authHeader) {
//             return res.status(401).json({ msg: 'Token not found' });
//         }

//         const token = authHeader.split(' ')[1];
//         if (!token) {
//             return res.status(401).json({ msg: 'Malformed token' });
//         }

//         const data = jwt.verify(token, 'amityadav222137');
//         req.jwtData = data;
//         next();
//     } catch (err) {
//         console.error('JWT Verification Error:', err);
//         res.status(403).json({ msg: 'Invalid or expired token' });
//     }
// };

// export default tokenVerify;
 

const JWT_SECRET = 'amityadav222137';
import jwt from 'jsonwebtoken';
// create token here
const createToken = (tokenData)=>{
    return jwt.sign({tokenData},JWT_SECRET , {expiresIn:'1h'})
}

// tokenVerify here 
const tokenVerify = async (req, res, next) => {

    const token = req.cookies.token;
    // console.log("shivam", token);
    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    try {
        const data = jwt.verify(token, JWT_SECRET);
        req.jwtData = data;
        next();
    } catch (error) {
        res.status(400).json({ message: 'Invalid token' });
    }
};

export {tokenVerify , createToken}
