const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        unique:true
    },
    email:{
        type:String,
        unique:true
    }
},{timestamps:true});

const userModel = mongoose.model('c_user',userSchema);
module.exports = userModel;
