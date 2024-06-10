const jwt = require('jsonwebtoken');

const userAuthmiddleware = (req, res, next)=>{
    const token = req.cookies.token;

    if(!token){
        return res.status(401).json({message:"No token, authorization danied"});
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded.email;
        console.log(req.user.email)
        next();
    } catch (error) {
        res.status(401).json({meassege:"Token is not valid"})
    }
}


module.exports = userAuthmiddleware;