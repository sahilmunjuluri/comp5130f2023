const express = require("express");
const router = express.Router();

/*const categories = require("../data/categories");

router.route("/")
    .get((req,res) => {
        res.json(categories.data);
    })
*/

const Category = require("../model/category.model");
const categoryHandler = require("../controller/categoryController");

router.route("/")
    .get(categoryHandler)

    module.exports = router;