const mongoose = require("mongoose");
const express = require("express");

const Category = require("../model/category.model");
const categories = require("../data/categories");

const router = express.Router();

router.route("/")
    .post(async(req, res) => {
        try {
            // const deleted = await Category.deleteMany({});
            const categoriesInDB = await Category.insertMany(categories.data);
            res.json(categoriesInDB);
        } catch (error) {
            console.log(error);
            res.json({message: "cannot load categories to the data base"});
        }
    })

    module.exports=router;