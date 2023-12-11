const CryptoJS = require("crypto-js");

const User = require("../model/user.model");

const signupHandler = (async (req,res)=> {
    console.log(req)
    try {
            // const userObject = {
            //     username: req.body.username,
            //     number: req.body.number,
            //     email: req.body.email,
            //     password: req.body.password
            // }
            if (!req.body.username || !req.body.number || !req.body.email || !req.body.password) {
                throw new Error("Missing required parameters");
            }
    
            const newUser = new User({
                username: req.body.username,
                number: req.body.number,
                email: req.body.email,
                password: CryptoJS.AES.encrypt(req.body.password, process.env.PASSWORD_SECRET_KEY).toString()
            });
            const savedUser = await newUser.save();
            res.status(201).json(savedUser);
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Error Creating User"});
    }
})

module.exports = signupHandler;