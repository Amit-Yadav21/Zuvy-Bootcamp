// Create Wishlist for the logged-in user
const createWishlist = (req, res) => {
    const user = req.session.user;
    const { item, category } = req.body;

    // Check if user is logged in
    if (!user) {
        return res.status(401).json({ msg: "User not logged in" });
    }

    if (!item || !category) {
        return res.status(400).json({ msg: "Item and category are required" });
    }

    // Initialize wishlist if not present
    if (!user.wishlist) {
        user.wishlist = [];
    }

    // Create a new wishlist item
    const newItem = { item, category };
    user.wishlist.push(newItem);

    // Respond with success message and updated wishlist
    res.status(201).json({ msg: "Wishlist item created successfully", wishlist: user.wishlist });
};

// Get Wishlist for the logged-in user
const Getwishlist = (req, res) => {
    const user = req.session.user;

    if (!user) {
        return res.status(401).json({ msg: "User not logged in" });
    }

    if (!user.wishlist) {
        user.wishlist = [];
    }

    res.status(200).json({ wishlist: user.wishlist });
};

// Update Wishlist for the logged-in user
const updateWishlist = (req, res) => {
    const user = req.session.user;
    const { item, category } = req.body;

    // Check if user is logged in
    if (!user) {
        return res.status(401).json({ msg: "User not logged in" });
    }

    // Validate request body
    if (!item || !category) {
        return res.status(400).json({ msg: "Item and category are required" });
    }

    // Initialize wishlist if not present
    if (!user.wishlist) {
        user.wishlist = [];
    }

    // Create a new wishlist item
    const newItem = { item, category };
    user.wishlist.push(newItem);

    res.status(200).json({ msg: "Wishlist updated successfully", wishlist: user.wishlist });
};

export { createWishlist, Getwishlist, updateWishlist }