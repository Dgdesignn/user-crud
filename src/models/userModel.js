const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        trim:true,
        lowercase:true
    },
    email:{
        type:String,
        trim:true,
        required:true,
        unique:true
    }
},{timestamps:true});

const userModel = mongoose.model('c_user',userSchema);
module.exports = userModel;
