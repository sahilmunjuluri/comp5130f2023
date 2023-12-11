const Hotel = require('../model/hotel.model');

const singleHotelHandler = (async (req,res) => {
    try {
        const { id } =  req.params;
        console.log(id);
        const hotel = await Hotel.findById(id);
        res.json(hotel)
    } catch (error) {
        console.log(error)
    }
})

module.exports = singleHotelHandler;