const mongoose = require('mongoose');


const contactSchema = new mongoose.Schema({

    name:{type:String, require:true, trim:true},
    phone:{type:String, require:true,trim:true},
    email:{type:String,trim:true, lowercase:true, default:"Sem email"},
    adress:{type:String,trim:true,default:'Sem Endereço'},
    user:{type:mongoose.Schema.Types.ObjectId,require:true}
    
},{timestamps:true});

module.exports = mongoose.model('Contact', contactSchema);