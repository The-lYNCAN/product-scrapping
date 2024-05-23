const mongoose = require("mongoose")
const Category = require("./category")

const SubCategorySchema = mongoose.Schema({
    name: String,
    category: {type: mongoose.Types.ObjectId, ref: Category}
})

module.exports = mongoose.model("SubCategory", SubCategorySchema)