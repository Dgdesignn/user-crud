const contactModel = require('../models/contantModel');



class ContactRepository {
    async createContact(Data){
        const contact = new  contactModel(Data);
        return await contact.save();
    }

    async getAllContactUser(userID){
        return await new contactModel.find({uer: userID});//Traz todos os contactos de um usuário
    }

    async getAllContact(){
        return await new contactModel.find();//Traz todos sos contactos do banco de dados
    }

    async getContactByID(data){
        return await new contactModel.findOne({phone:data.phone, user:data.userID});//Traz um contacto específico de um usuário
    }

    async updateContact(contactIDs, Data){
        return await new contactModel.findOneAndUpdate(contactIDs ,Data,{new:true});
    }

    async deleteContact(Data){
        return await new contactModel.findByIdAndDelete({_id:Data.contactID, user:Data.userID});
    }

    async deleteAllUserContactByID(userID){
        return await new contactModel.findOneAndDelete({user:userID});
    }

    async deleteAllcontact(){
        return await new contactModel.deleteMany({});
    }
}


module.exports = new ContactRepository();