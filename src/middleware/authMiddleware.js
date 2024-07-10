const jwt = require('jsonwebtoken');


const userAuthmiddleware = async (req, res, next)=>{
    let token;

    let authHeader = req.headers.authorization ;

    if(!authHeader)return res.status(401).json({message:"Forneça o toke de autenticação"});


    if(authHeader && authHeader.startsWith("Bearer")){
        try {
            token = authHeader.split(" ")[1];
            const decod = jwt.verify(token, process.env.JWT_SECRET);
            const{ userId, role} = decod;
            console.log("User::", decod)
            req.userID = userId;
            req.userRole = role;
            next();
        } catch (error) {
            res.status(401).json({message:'Usuário não autorizado',err:error.message})
        }
       
    }else{res.status(401).json({message:"O token deve começar com 'Beare'", exp:"Beare [token]"})}
    
}



module.exports = userAuthmiddleware;