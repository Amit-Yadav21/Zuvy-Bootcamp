// Get liked posts for the logged-in user
const getLikedPost = (req, res) => {
    const user = req.session.user;

    if (!user) {
        return res.status(401).json({ msg: "User not logged in" });
    }

    if (!user.likedPosts) {
        user.likedPosts = [];
    }

    res.status(200).json({ GetlikedPosts: user.likedPosts });
};

// Save liked posts for the logged-in user
const createLikedPost = (req, res) => {
    const user = req.session.user;
    const { postTitle, author } = req.body;

    if (!user) {
        return res.status(401).json({ msg: "User not logged in" });
    }

    if (!user.likedPosts) {
        user.likedPosts = [];
    }

    const newPost = { postTitle, author };
    user.likedPosts.push(newPost);

    res.status(200).json({ msg: "Post liked successfully", likedPosts: user.likedPosts });
};

export {getLikedPost, createLikedPost}