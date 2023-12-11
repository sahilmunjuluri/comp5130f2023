
const Category = require("../model/category.model");

const categoryHandler = (async(req, res)=> {
    try {
        const categories = await Category.find({});
        categories ? res.json(categories) : res.status(404).json({message: "No data found"})
    } catch (error) {
        console.log(error);
    }
})

module.exports = categoryHandler;