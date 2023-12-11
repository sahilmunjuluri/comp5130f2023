const mongoose = require("mongoose");
const express = require("express");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

const User = require("../model/user.model");
const signupHandler = require("../controller/signupController");
const loginHandler= require("../controller/loginController");

const router = express.Router();

router.route("/register")
    .post(signupHandler)


router.route("/login")
    .post(loginHandler)

    module.exports= router;