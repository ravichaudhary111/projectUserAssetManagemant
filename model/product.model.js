const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    _id: {
        type: String,
        requied: true
    },
    productName: {
        type: String,
        requied: true
    },
    quanity: {
        type: Number,
        requied: true
    }
})


const productData= mongoose.model("product1",productSchema,"product1");
module.exports = productData;
  
