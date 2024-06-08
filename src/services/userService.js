const userRepository = require("../repositories/userRepository");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

class UserService{

    async createUser(user){
        const salt = await bcrypt.genSalt(10);
        user.password =  await bcrypt.hash(user.password, salt);
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

    async login(email,password){
        const user = await userRepository.getUserByEmail(email);
       
        if(!user)throw new Error('Usuário não encontrado');
        
        const userPassword = user.password;
        const isMatch = await bcrypt.compare(password,userPassword);

        console.log(isMatch);
        if(!isMatch){
            throw new Error('Email ou Senha inválida');
        }

       const payload = {userId: user.id, username:user.username, email:user.email};
       const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn:'2m'});
        return { token };
    }
}

module.exports = new UserService();
