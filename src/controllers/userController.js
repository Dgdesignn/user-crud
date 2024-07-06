const {
    createUser, 
    updateUser, 
    getAllUser, 
    getUserByEmail, 
    sremoveUser,
    login,
    sremoveAllUser
} = require("../services/userService");


class userController{

    async getAllUsers(req, res){
        console.log(req.headers)
        try {
            const users = await getAllUser();
            console.log(req.userID)
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({message:error.message});
        }
    }

    async getUserByEmail(req, res){
        let email = req.params.email;
        try {
            const user = await getUserByEmail(email);
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({message:error.message});
        }
    }


    async updateUser(req, res){
        try {
            const user = await updateUser(req.params.id, req.body);
            res.status(200).json(user)
        } catch (error) {
            res.status(500).json({message:error.message});
        }
    }


    async removeUser(req, res){
        const id = req.params.id;
        
        try {
             const result = await sremoveUser(id);
             res.status(204).json({message:'Usuário removido',result:result}) 
        } catch (error) {
            res.status(500).json({message:error.message});
        }
    }

}

module.exports = new userController();