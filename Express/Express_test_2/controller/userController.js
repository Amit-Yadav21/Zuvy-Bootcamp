import User from "../Models/userModel.js";
import { comparePassowrdHash, hashPassword } from '../passwordHash/passwordHash.js'

// get all user
const findallUser = async (req, res) => {
    try {
        const users = await User.find({});
        res.json(users)
    } catch (error) {
        res.status(500).json('Internal server error')
    }
}

const createUser = async (req, res) => {
    const { username, password, role } = req.body;
    if (!password) {
        return res.status(400).json('Password Missing...')
    }

    try {
        const hashedPassword = await hashPassword(password);

        // create new user
        const newUser = new User({ username,password: hashedPassword,role });

        const result = await newUser.save();

        res.status(201).json({ message: 'Create new user successfully', result })

    } catch (error) {
        res.status(500).json('Internal Server Error')
    }
}

const login = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json('Username, Password both are missing.')
    }

    try {
        let user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json('User not exist..!')
        }

        const machPassowrd = await comparePassowrdHash(password, user.password);
        if (!machPassowrd) {
            return res.status(403).json({ Error: 'Invalid Password' })
        }

        req.session.user = user;
        if (user) {
            res.status(200).json({ message: 'Login Successfully', userInfo: user })
        }
        else {
            res.status(401).json({ message: 'Login Faild' })
        }

    } catch (error) {
        res.status(500).json('Internal Server Error')
    }
}

const userProfile = async (req, res) => {
    const user = req.session.user;
    if (user) {
        res.status(200).json({ userProfile: user })
    }
    else {
        res.status(401).json({ message: 'User not login.' })
    }
}

const logout = async (req, res) => {
      // Check if the session exists
      if (!req.session.user) {
        return res.status(400).json({ message: "No active session found. User might already be logged out." });
    }

    req.session.destroy((err) => {
        if (err) {
            return res.status(500).json({ message: "Failed to logout user" })
        }
        res.clearCookie('connect.sid');
        res.status(200).json({ message: "User logged out successfully." })
    })
}

export { findallUser, createUser, login, userProfile, logout };