
const {
    createContact,
    getAllContactUser,
    getContactByID,
    getAllContact,
    updateContact,
    deleteAllUserContactByID,
    deleteContact,
    deleteAllcontact
} = require('../repositories/contactRepository');

class ContactService{
    async addContact(userID, Data){
        const existingContact = await getContactByID({userID, phone:Data.phone});

        if(existingContact){
            throw new Error(`O contacto ${Data.phone} já existe!` )
        };

        const created =  await createContact({
            ...Data,
            user:userID});
        
        return created;
        
    }

    async getAllContactByUser(userID){
        return contacts = await getAllContactUser(userID);
    }

    async getContactByPhoneNumber(userID, phone){
        return contact = await getContactByID({userID, phone})
    }

    async updateContact(userID,contactID, data){
        const contactIDs = {_id:contactID, user:userID}
        const update = await updateContact(contactIDs, data)
        return update;
    }

    async deleteSigleContact(userID, contactID){
        return deleted = await deleteContact({userID, contactID})
    }
}


module.exports = new ContactService();