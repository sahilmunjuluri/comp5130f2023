const wishlist = require("../model/wishlist.model")
const verifyUser = require("../middleware/verifyuser")

const createWishlistHandler = ( async (req, res) => {
    const newWishlist = new wishlist(req.body)
    try {
        const savedWishlist = await newWishlist.save();
        res.status(201).json(savedWishlist);
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Failed to create the wishlist"})
    }
})

const deleteWishlistHandler = ( async (req,res) => {
    try {
        await wishlist.findByIdAndDelete(req.params.id);
        res.json({message:"Hotel deleted form Wishlist"})
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Failed to delete the hotel from wishlist"})
    }
})

const getWishlistHandler = ( async (req,res) => {
    try {
        const wishlistall = await wishlist.find({});
        wishlistall ? res.json(wishlistall) : res.json({message : "No items found in the wishlist"})

    } catch (error) {
        console.log(error)
        res.status(500).json(error);
    }
})

module.exports = {createWishlistHandler, deleteWishlistHandler, getWishlistHandler};