const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function(req,res,next) {
    // Get the token from header

    const token = req.header('x-auth-token');

    // Check if not token
    if(!token){
        return res.status(401).json({ msg:'No token, authorization denied'});

    }
    // verify the token
    try {
        const decoded = jwt.verify(token, config.get('jwtSecrete'));
        req.user = decoded.user;

        next();
    }
    catch{
        res.status(401).json({ msg: 'token is not valid' });
    }

}