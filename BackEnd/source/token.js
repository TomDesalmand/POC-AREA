var jwt = require('jsonwebtoken');

function generateAccessToken(user) {
    return jwt.sign(user, process.env.SECRET, { expiresIn: '1800s' });
}

function authenticateToken(req, res, next) {
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
        token = req.headers.authorization.split(" ")[1]
    } else {
        return res.status(500).send({
            "msg": "No token, authorization denied",
        })
    } if (!token) {
        res.status(500).json({
            "msg": "No token, authorization denied",
        })
    }
    jwt.verify(token, process.env.SECRET, (error, user) => {
        if (error) {
            res.status(500).json({
                "msg": "Token is not valid"
            })
            return;
        }
        req.user = user;
        next();
    });
}

module.exports = {
    generateAccessToken,
    authenticateToken,
}