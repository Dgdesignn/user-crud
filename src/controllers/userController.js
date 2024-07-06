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
    
    async createUser(req, res){
        let {username, password, email} = req.body;

        const ifEmailValible = await getUserByEmail(email)
        console.log(ifEmailValible)
        if(ifEmailValible){
            res.status(403).json({mensagem:"Usuário existente"})
            return
        }
        try {
            const user = await createUser({username:username,password:password,email:email})
            res.status(201).json({message:"Usuário criado com sucess!",user:user})
        } catch (error) {
            res.status(500).json({message:error.message})
        }
    }

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


    async login(req, res){
        const {password, email} = req.body;
        try {
            const userToken = await login(email, password);
            res.cookie('token',userToken,{httpOnly:true,secure:process.env.NODE_ENV === 'production'})
            res.status(201).json({message:"login successful",token:userToken});
        } catch (error) {
            res.status(401).json({title:"login not acepted",message:error.message});
        }
    }

}

module.exports = new userController();