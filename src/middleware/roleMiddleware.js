

const roleMiddleware = (roles)=>(req, res, next)=>{
    if(!role.includes(req.user.role)){
        return res.status(403).json({message:'Access denied'})
    }
    next();
}

module.exports = roleMiddleware;