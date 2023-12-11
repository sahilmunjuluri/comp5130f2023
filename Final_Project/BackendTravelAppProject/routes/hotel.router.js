const express = require('express');
const router= express.Router();


// Taking from the local 

/*const hotels = require('../data/hotels');
router.route("/")
    .get((req,res) => {
        res.json(hotels.data)
    })
    */

// Take it from the data base

const Hotel = require('../model/hotel.model');
const getAllHotelHandler = require("../controller/hotelController");

router.route("/")
    .get( getAllHotelHandler)

    module.exports= router;