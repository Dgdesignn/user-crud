const userRepository = require("../repositories/userRepository");

class UserService{

    async createUser(user){
        return await userRepository.createUser(user);
    }

    async getAllUser(){
        return await userRepository.getAllUsers();
    }

    async getUserByEmail(email){
        return await userRepository.getUserByEmail(email);
    }

    async updateUser(id, user){
        return await userRepository.updateUser(id, user);
    }

    async sremoveUser(id){
        return await userRepository.deleteUser(id)
    }
}

module.exports = new UserService();
