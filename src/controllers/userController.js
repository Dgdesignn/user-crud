const {
    createUser, 
    updateUser, 
    getAllUser, 
    getUserById, 
    sremoveUser} = require("../services/userService");


class userController{
    
    async createUser(req, res){
        let {username, password} = req.body;

        try {
            const user = await createUser({username:username, password:password})
            res.status(201).json({message:"Usuário criado com sucess!",user:user})
        } catch (error) {
            res.status(500).json({message:error.message})
        }
    }

    async getAllUsers(req, res){
        try {
            const users = await getAllUser();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({message:error.message});
        }
    }

    async getUserById(req, res){
        let id = req.params.id;
        try {
            const user = await getUserById(id);
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
             const userR = await sremoveUser(id);
             res.status(204).json({message:'Usuário removido'}) 
        } catch (error) {
            res.status(500).json({message:error.message});
        }
    }

}

module.exports = new userController();