const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../repositories/userRepository');

class AuthService{
    async register(userData){
        const {username, password, email, role} = userData;
        const hashedPassword = await bcrypt.hash(password, 10);
        return await User.createUser({username:username, password:hashedPassword, email:email, role:role})
    }

    async login(loginData){
        const {password, email} =loginData;
        const user = await User.getUserByEmail(email);

        if(!user)return"Email ou senha inválido";

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch)return"Email ou senha inválido";

        const playload = {userId:user._id, role:user.role};
        const token = jwt.sign(playload, process.env.JWT_SECRET, {expiresIn:'2m'});
   
        return token
    }
}

module.exports = new AuthService();
