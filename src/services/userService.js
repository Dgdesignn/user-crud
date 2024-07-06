const userRepository = require("../repositories/userRepository");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

class UserService{


    async getAllUsers(){
        return await userRepository.getAllUsers();
    }

    async getUserByEmail(email){
        return await userRepository.getUserByEmail(email);
    }

    async updateUser(id, user){
        const salt = await bcrypt.genSalt(10);
        user.password =  await bcrypt.hash(user.password, salt);
        return await userRepository.updateUser(id, user);
    }

    async getUserContact(userId){
        //return await Contact.getUserContact(userId);
    }

    async removeUserById(id){
            return await userRepository.deleteUser(id);
    }

    async removeAllUsers(){
        return await userRepository.deleteAllUser();
    }


}

module.exports = new UserService();
