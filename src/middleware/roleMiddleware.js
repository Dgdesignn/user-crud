

const roleMiddleware = (roles)=>(req, res, next)=>{
    if(!roles.includes(req.userRole)){
        return res.status(403).json({message:'Acesso negado!'})
    }
    next();
}

module.exports = roleMiddleware;