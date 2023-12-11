const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

const User = require("../model/user.model");

const loginHandler = (async (req,res) => {
    try {
        console.log(req);
        const user = await User.findOne({number: req.body.number})
        !user && res.status(401).json({message:"Invalid Number"})

        const decryptedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASSWORD_SECRET_KEY).toString(CryptoJS.enc.Utf8);
        decryptedPassword !== req.body.password && res.status(401).json({message:"Incorrect passsword"});

        const {password, ...rest} = user._doc;
        const accessToken = jwt.sign({ username:user.username}, process.env.ACCESS_TOKEN)
        res.json({...rest, accessToken});

    } catch (error) {
        console.log(error);
    }
})

module.exports = loginHandler;