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

const getUserData = (req, res, next)=>{
    if (userData.length === 0){
        return res.status(404).json("User signup data not found ?")
    }
    res.json({msg:'All signup data', userData})
}

const findAllUsersWithCart = (req, res) => {
    // Initialize cart if it doesn't exist for any user
    if (!req.session.cart) {
        req.session.cart = {};
    }

    // Prepare the response with user and cart info
    const usersWithCart = userData.map(user => {
        const userId = user.id;

        // Ensure cart is initialized for each user
        if (!req.session.cart[userId]) {
            req.session.cart[userId] = null; // Explicitly set to null if no cart exists
        }

        return {
            user: {
                id: user.id,
                username: user.username,
            },
            cart: req.session.cart[userId] !== null ? req.session.cart[userId] : null, // Return null if no cart exists
        };
    });

    res.status(200).json({
        msg: "All users with their carts",
        usersWithCart,
    });
};

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

export { createUser, getUserData, loginUser, logout, findAllUsersWithCart }