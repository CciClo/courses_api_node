const Users = require("../models/user.model");

class AuthServices {
    static async login (email, password) {
        try {
            const user = await Users.findOne({where: {email}});

            if (user) {
                return user.password === password ? {isValid: true, user} : {isValid: false};

            }
            return {isValid: false};

        } catch (error) {
            throw error;
        }; 
    };
};


module.exports = AuthServices;