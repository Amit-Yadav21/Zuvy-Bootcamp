const userData = [
    { id: 1, username: "Amit", password: "Amit@123" },
    { id: 2, username: "Rahul", password: "Rahul@123" },
    { id: 3, username: "Paras", password: "Paras@123" },
]

const createUser = (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ msg: "username and password is require." })
    }

    const id = userData.length + 1;
    const newData = { id, username, password }
    userData.push(newData)
    res.status(200).json({ msg: 'create new user successfully', NewData: newData })
}

const loginUser = (req, res) => {
    const { username, password } = req.body;
    const loginUser = userData.find((item) => item.username === username && item.password === password);
    if (!loginUser) {
        res.status(401).json({ msg: "username and password is incorrect" })
    }
    else {
        req.session.user = loginUser;
        if (!req.session.createdAt) {
            req.session.createdAt = new Date().toISOString();
        }

        res.status(200).json({
            msg: "login successfully.", loginUser: {
                id:loginUser.id,
                username:loginUser.username
            }
        })
    }
}

const UserDashboard = (req, res) => {
    const user = req.session.user;
    if (!user) {
        return res.status(401).json({ msg: "User not logged in" });
    }
    res.status(200).json({
        msg: "Welcome to the user dashboard", user: {
            id: user.id,
            username: user.username,
            likedPosts: user.likedPosts || [],
            wishlist: user.wishlist || []
        }
    });
}

// Route to log out a user
const logout = (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.status(500).json({ msg: "Error logging out" });
        }
        res.clearCookie('connect.sid'); // Clear the cookie
        res.json({ msg: "Logged out" });
    });
};

// route to get all session data
const sessionInfo = (req, res) => {
    const user = req.session.user || {};

    res.json({
        sessionCookie: req.session.cookie,
        user: {
            userId: user.id || null,
            username: user.username || null,
            likedPosts: user.likedPosts || [],
            wishlist: user.wishlist || []
        },
        sessionId: req.session.id,
        createdAt: req.session.createdAt,
    });
};

export { createUser, UserDashboard, loginUser, logout, sessionInfo }