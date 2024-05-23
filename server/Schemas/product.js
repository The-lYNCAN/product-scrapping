const mongoose = require("mongoose")
const Brand = require("./brand")
const SubCategory = require("./subcat.js")

const ProductSchema = mongoose.Schema({
    name: String,
    brand: {type: mongoose.Types.ObjectId, ref: Brand},
    price: Number,
    img: String,
    unit: String,
    subcategory: {type: mongoose.Types.ObjectId, ref: SubCategory}
})

module.exports = mongoose.model("Product", ProductSchema)