const UsersServices = require("../services/users.services");


const getUserById = async ( req, res ) => {
    const {id} = req.params;
    
    try {
        const user = await UsersServices.getById(id);
        res.json(user);
    } catch (error) {
        res.status(400).json(error)
    }
};

const getUserWithCourses = async (req, res) => {
    const { id } = req.user;
    
    try {
        const user = await UsersServices.getWithCourses(id);
        res.json(user);

    } catch (error) {
        res.status(400).json(error)
    }
};


const createUser = async (req, res) => {
    const {body} = req.body;

    try {
        const result = await UsersServices.create(body);
        res.status(201).json(result)
    } catch (error) {
        res.status(400).json(error)        
    };
};

const addACourseToAUser = async (req, res) => {
    const {id: userId} = req.user;
    const {id: courseId} = req.params;

    try {
        // console.log(userId, courseId);
        const result = await UsersServices.addCourseToUser(Number(userId), Number(courseId));
        res.json(result);

    } catch (error) {
        res.status(400).json(error);
    }
};

const updateUser = async (req, res) => {
    const {id} = req.user;
    const body = req.body;
    const user = {};
    try {
        
        body.password && (user.password = body.password);
        body.last_name && (user.last_name = body.last_name);
        body.first_name && (user.first_name = body.first_name);
        
        const result = await UsersServices.update(id, user);
        res.status(201).json(result);

    } catch (error) {
        res.status(400).json(error)
    }

};


module.exports = {
    getUserById,
    getUserWithCourses,
    createUser,
    addACourseToAUser,
    updateUser,
}