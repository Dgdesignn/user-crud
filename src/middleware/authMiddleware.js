const jwt = require('jsonwebtoken');


const userAuthmiddleware = async (req, res, next)=>{
    let token;

    let authHeader = req.headers.authorization 

    if(authHeader)return res.status(401).json({message:"Authorization header is missing"});


    if(authHeader && authHeader.startsWith("Bearer")){
        try {
            token = authHeader.split(" ")[1];
            const decod = jwt.verify(token, process.env.JWT_SECRET);
            const{ user} = decod;
            req.userID = user.userId;
            next();
        } catch (error) {
            res.status(401).json({message:'User is not authorized',err:error.message})
        }
       
    }else{res.status(401).json({message:"It no started with 'Beare'"})}
    
}



module.exports = userAuthmiddleware;