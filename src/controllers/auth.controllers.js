const jwt = require("jsonwebtoken");
const AuthServices = require("../services/auth.services");
require("dotenv").config();


const userLogin = async (req, res) => {

    const {email, password} = req.body;

    try {

        const response = await AuthServices.login(email, password);
        
        if(response.isValid) {
            const data = {
                email: response.user.email,
                username: response.user.username,
                id: response.user.id
            };

            const token = jwt.sign(data, process.env.JWT_SECRET, {algorithm: "HS512"});
            data.token = token;
            
            res.json(data);
        }else {
            res.status(401).json({message:"Credenciales invalidas"});
        };

    } catch (error) {
        res.status(400).json(error);
    };
};

module.exports = {
    userLogin,
};