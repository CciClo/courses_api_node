const CategoriesServices = require("../services/categories.services");

const createCategory = async (req, res) => {
    const body = req.body;
    const {id} = req.params;
    try {
        body.course_id = id;
        const result = await CategoriesServices.create(body);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
};


const deleteCategory = async (req, res) => {

    const {id} = req.params;
    try {
        const result = await CategoriesServices.delete(id);
        res.json(result);
    } catch (error) {
        res.status(400).json({message: err.message});
    }
};


module.exports = {
    createCategory,
    deleteCategory
};