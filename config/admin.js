const admin = (req, res, next) => {
    if(req.body.role === 0) {
        return res.status(400).json({msg:"You are not a Admin user"});
    }
    next();
}

module.exports = admin;