const contactModel = require('../models/contantModel');



class ContactRepository {
    async createContact(Data){
        const contact = new  contactModel(Data);
        return await contact.save();
    }

    async getAllContactUser(userID){
        return await new contactModel.find({uer: userID});
    }

    async getAllContact(){
        return await new contactModel.find();
    }

    async getContactByID(userID, contactID){
        return await new contactModel.findOne({_id:contactID, user:userID});
    }

    async updateContact(userID, contactID, Data){
        return await new contactModel.findOneAndUpdate({_id:contactID, user:userID},Data,{new:true});
    }

    async deleteContact(userID, contactID){
        return await new contactModel.findByIdAndDelete({_id:contactID, user:userID});
    }

    async deleteAllUserContactByID(userID){
        return await new contactModel.findOneAndDelete({user:userID});
    }

    async deleteAllcontact(){
        return await new contactModel.deleteMany({});
    }
}


module.exports = new ContactRepository();