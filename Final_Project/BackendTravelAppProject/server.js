const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const hotelRouter = require("./routes/hotel.router");
const categoryRouter = require("./routes/category.router");
const hotelDataAddedtoTheDataImportRoute = require("./routes/dataimport.router");
const categoryDataAddedtoTheDataImportRoute = require("./routes/categoryimport.router");
const singleHotelData = require("./routes/singlehotel.route");
const authRouter = require('./routes/auth.router');
const wishlistRouter = require('./routes/wishlist.router');

const connectDB = require("./config/dbconfig");

const app = express();

app.use(cors());

app.use(express.json());
connectDB();

const PORT = 3500;

app.get("/", (req,res) => {
    res.send("Hello"+" "+ "Hotels API created https://real-goat-stole.cyclic.app/api/hotels" + " "+ "Categories API Created https://real-goat-stole.cyclic.app/api/category"+ " "+"Fetch the Single Hotel Data using API https://real-goat-stole.cyclic.app/api/hotels/6546b3b21eed0aa6d33ed241" +" "+"Wishlist API created https://real-goat-stole.cyclic.app/api/wishlist")
})

app.use("/api/hoteldata", hotelDataAddedtoTheDataImportRoute);
app.use("/api/hotels", hotelRouter);
app.use("/api/category",categoryRouter);
app.use("/api/categorydata",categoryDataAddedtoTheDataImportRoute);
app.use("/api/hotels", singleHotelData);
app.use("/api/auth", authRouter);
app.use("/api/wishlist", wishlistRouter);

mongoose.connection.once("open", ()=> {
    console.log("connected to the Data Base");
    app.listen(process.env.PORT || PORT, () => {
        console.log("Server is Up and running");
    })
})
