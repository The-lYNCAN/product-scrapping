const mongoose = require("mongoose")
const Brand = require("./brand")
const SubCategory = require("./subcat.js")

const ProductSchema = mongoose.Schema({
    name: String,
    price: Number,
    img: String,
    unit: String,
    barcode: String
})

module.exports = mongoose.model("ShopProduct", ProductSchema)