import express from 'express';
const router = express.Router();

router.get('/get-cookie', (req, res) => {
    const cookies = req.headers.cookie;
    const signedCookies = req.signedCookies;

    if (!cookies || signedCookies.length === 0) {
        res.status(404).json({ msg: "No cookies found." });
    } else {
        console.log(cookies); // Get cookies in key and value format
        console.log(signedCookies); // Get cookies in object format
        res.status(200).json({ msg: "Successfully retrieved cookies.", getCookies: signedCookies });
    }
});

router.get('/set-cookie', (req, res) => {
    res.cookie("setCookie", "amit yadav", { path: "/cookies", maxAge: 5 * 60 * 1000, httpOnly: true, signed: true });
    res.status(200).json({ msg: "Cookies are set" });
});

router.get('/verify-cookie', (req, res) => {
    const { setCookie } = req.signedCookies;

    if (setCookie) {
        res.status(200).send({msg:'Cookie is verified successfully!', verifyCookies:setCookie});
    } else {
        res.status(401).json({msg:'Invalid Cookie'});
    }
});

export default router;