const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    nome:{
        type:String,
        required:true,
        unique:true
    },
    telefone:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        trim:true,
        lowercase:true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'c_user',
        required:true
    }
},{timestamps:true});

const contactModel = mongoose.model('c_contact',contactSchema);
module.exports = contactModel;
