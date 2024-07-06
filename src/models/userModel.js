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
    },
    role:{
        type:String,
        enum:['normal','admin'],
        default:'normal'
    }
},{timestamps:true});

const userModel = mongoose.model('c_user',userSchema);
module.exports = userModel;
