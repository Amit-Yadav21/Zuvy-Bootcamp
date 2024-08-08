const createCart = (req, res) => {
    const { name, price, quantity } = req.body;

    if (!req.session.user) {
        return res.status(401).json({ msg: "Unauthorized" });
    }

    const userId = req.session.user.id;

    if (!req.session.cart) {
        req.session.cart = {};
    }

    if (!req.session.cart[userId]) {
        req.session.cart[userId] = [];
    }

    const item = { name, price, quantity, currency: "INR" };
    req.session.cart[userId].push(item);

    return res.status(201).json({ msg: "Item added to cart", item });
};

const findCartCreatedByLoginUser = (req, res) => {
    if (!req.session.user) {
        return res.status(401).json({ msg: "Unauthorized" });
    }

    const userId = req.session.user.id;

    // Initialize cart if it doesn't exist for the user
    if (!req.session.cart) {
        req.session.cart = {};
    }

    if (!req.session.cart[userId]) {
        req.session.cart[userId] = null; // Explicitly set to null if no cart exists
    }

    res.status(200).json({
        msg: "Cart and User Info",
        user: {
            id: req.session.user.id,
            username: req.session.user.username,
        },
        cart: req.session.cart[userId] !== null ? req.session.cart[userId] : null, // Return null if no cart exists
    });
};



export { createCart, findCartCreatedByLoginUser }