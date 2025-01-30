const mongoose = require("mongoose")
const product = mongoose.Schema({
    productName:String,
    productCat:String,
    productPrice:String,
    productQuantity:Number,
})

const prodModel = mongoose.model("Product",product);
module.exports = prodModel;