const express = require('express')

const wishlist = require("../model/wishlist.model")
const verifyUser = require("../middleware/verifyuser")
const wishlistController = require("../controller/wishlistController")
const router = express.Router();

const {createWishlistHandler, deleteWishlistHandler, getWishlistHandler} = wishlistController;


router.route("/")
    .post( createWishlistHandler)

router.route("/:id")
    .delete( deleteWishlistHandler)

router.route("/")
    .get(getWishlistHandler )

    module.exports = router;