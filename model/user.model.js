const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    _id: {
        type: String,
        requried: true
    },
    name: {
        type: String,
        requried: true
    },
    email: {
        type: String,
        requried: true
    },
    password: {
        type: String,
        requried: true
    },
    assignProduct:{
        type:Array,
        requried: false
    }
})

const UserData= mongoose.model("User1",userSchema,"User1");
module.exports = UserData;
