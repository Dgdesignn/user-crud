const {
    getAllUsers,
    getUserByEmail,
    getUserContact,
    updateUser,
    removeUserById,
    removeAllUsers

} = require("../services/userService");


class userController{

    async getAllUsers(req, res){
        try {
            const users = await getAllUsers();
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
             const result = await removeUserById(id);
             res.status(204).json({message:'Usuário removido',result:result}) 
        } catch (error) {
            res.status(500).json({message:error.message});
        }
    }

    async removeAllUser(req, res){
        const id = req.params.id;
        
        try {
             const result = await removeAllUsers();
             res.status(204).json({message:'Todos os usuários foram removidos',result:result}) 
        } catch (error) {
            res.status(500).json({message:error.message});
        }
    }

}

module.exports = new userController();