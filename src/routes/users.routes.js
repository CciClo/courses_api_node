const { Router } = require("express");
const { getUserById, getUserWithCourses, createUser, addACourseToAUser, updateUser } = require("../controllers/users.controllers");
const authMiddleware = require("../middlwares/auth.middleware");

const router = Router();

router.get("/users/courses", authMiddleware, getUserWithCourses);
router.get('/users/:id', getUserById); // esta siendo confundida con otras direcciones => si se pone arriba de la direccion que es parecida da error
router.post("/users", createUser);
router.post('/users/courses/:id', authMiddleware, addACourseToAUser);
router.put('/users', authMiddleware, updateUser);


module.exports = router;
