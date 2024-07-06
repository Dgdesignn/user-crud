const userModel = require("../models/userModel");

class UserRepository{
    async createUser(user){
        const newUser = new userModel(user);
        return await newUser.save();
    }

    async getAllUsers(){
        return await userModel.find();
    }

    async getUserByEmail(email){
        return await userModel.findOne({email})
    }

    async updateUser(id, updateUser){
        return await userModel.findByIdAndUpdate(id, updateUser, {new:true});
    }

    async deleteUser(id){
        return await userModel.findOneAndDelete(id);
    }

    async deleteAllUser(){
        return await userModel.deleteMany({}) 
    }
}

module.exports = new UserRepository();