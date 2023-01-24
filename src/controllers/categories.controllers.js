const CategoriesServices = require("../services/categories.services");

const createCategory = async (req, res) => {
    const body = req.body;
    const {course_id} = req.params;
    try {
        body.course_id = course_id;
        const result = await CategoriesServices.create(body);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
};


const deleteCategory = async (req, res) => {

    const {category_id} = req.params;
    try {
        const result = await CategoriesServices.delete(category_id);
        res.json(result);
    } catch (error) {
        res.status(400).json({message: err.message});
    }
};


module.exports = {
    createCategory,
    deleteCategory
};