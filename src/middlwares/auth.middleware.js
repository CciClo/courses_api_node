const jwt = require("jsonwebtoken");
require("dotenv").config();


const authMiddleware = (req, res, next) => {
    let { authorization: token } = req.headers;

    token = token.replace('Bearer ', '');

    jwt.verify(token, process.env.JWT_SECRET, {algorithms: 'HS512'}, (err, decode) => {

        if (err) {
            res.status(400).json({
                error: "invalid token",
                message: "EL token no es valido, envia un token correcto"
            });
        }else {
            // console.log(decode);
            req.user = decode;
            next();
        }

    });
};

module.exports = authMiddleware;