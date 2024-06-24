const jwt = require('jsonwebtoken');

const userAuthmiddleware2 = (req, res, next)=>{
    const token = req.cookies.token;
    console.log(token)
    if(!token){
        return res.status(401).json({message:"No token, authorization danied"});
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded.email;
        console.log(decoded)
        next();
    } catch (error) {
        res.status(401).json({meassege:"Token is not valid"})
    }
}

const userAuthmiddleware = async (req, res, next)=>{
    let token;

    let authHeader = req.headers.authorization || req.headers.authorization

    if(authHeader && authHeader.startsWith("Bearer")){
        try {
            token = authHeader.split(" ")[1];
            const decod = jwt.verify(token, process.env.JWT_SECRET)
            const user = decod.user;
            console.log(user);
            next();
        } catch (error) {
            res.status(401).json({message:'User is not authorized',err:error.message})
        }
       
    }


    
}



module.exports = userAuthmiddleware;