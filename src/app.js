const express = require("express");
const cors = require("cors");
const db = require("./utils/database");
const usersRoutes = require("./routes/users.routes");
const initModels = require("./models/init.models");
const coursesRoutes = require("./routes/courses.routes");
const authRoutes = require("./routes/auth.routes");
const videosRoutes = require("./routes/videos.routes");
const categoriesRoutes = require("./routes/categories.routes");
require("dotenv").config();


const app = express();

app.use(express.json());
app.use(cors());


db.authenticate()
    .then(() => console.log("authenticate correct"))
    .catch((error) => console.log(error))
initModels();

db.sync({force: false})
    .then(() => console.log("Base de datos sincronizada"))
    .catch( error => console.log(error));


app.use('/', authRoutes );
app.use('/', usersRoutes );
app.use('/', coursesRoutes );
app.use('/', videosRoutes);
app.use('/', categoriesRoutes);



const PORT = process.env.PORT || 800;
app.listen(PORT, () => {
    console.log(`El servidor esta listo en el puerto ${PORT}`);
});


/// npm i -D nodemon
// npm install express sequelize pg pg-hstore
/// npm install cors
// npm i jsonwebtoken
// npm install dotenv