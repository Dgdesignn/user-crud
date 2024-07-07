const {register, login} = require('../services/authService');
const {getUserByEmail} = require('../services/userService');


class AuthController{

    async register(req, res){
        const ifEmailValible = await getUserByEmail(req.body.email)
        if(ifEmailValible){
            res.status(403).json({mensagem:"Usuário ou email inválido"})
            return
        }

        try {
            const user = await register(req.body);
            res.status(201).json({message:"Usuário criado com sucess!",user:user})
        } catch (error) {
            res.status(500).json({message:error.message})
        }
    }


    async login(req, res){
        const {password, email} = req.body;
        
        
        try {
            const userToken = await login({email, password});
           //res.cookie('token',userToken,{httpOnly:true,secure:process.env.NODE_ENV === 'production'})
            res.status(201).json({message:"login efetuado com sucesso",token:userToken});
        } catch (error) {
            res.status(401).json({title:"login inválido",message:error.message});
        }
    }
}

module.exports = new AuthController();