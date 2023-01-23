const Categories = require("../models/categories.models");
const Courses = require("../models/courses.model");
const Users = require("../models/user.model");
const UsersCourses = require("../models/usersCourses.model");
const Videos = require("../models/videos.model");
const db = require("../utils/database");

const users = [
    {
        username: "Oscar",    /// 1
        email: "oscar@gnail.com",
        first_name: "Oscar",
        last_name:"Tandioy",
        password: "123456"
    },
    {
        username: "Alex",    ///// 2
        email:"alex@gmail.com",
        first_name: "Alex",
        last_name:"Tandioy",
        password: "654321",
    },
    {
        username: "Pipe",   ///// 3
        email: "pipe@email.com",
        first_name: "Pipe",
        password:"123456"
    },
    {
        username: "Pepe",   ///// 4
        email:"pepe@gmail.com",
        first_name:"Pepe",
        password:"654321"
    },
    {
        username: "Pedro",    /// 5
        email: "pedro@gmail.com",
        first_name:"Pedro",
        password:"123456"
    }
];

const courses = [
    {
        name:"Carpintenria",
        description: "Se aprendera desde lo basico hasta lo mas avanzado en carpinteria",
        instructor: "Pipe"
    },
    {
        name: "Mecanica",
        instructor: "Alex"
    },
    {
        name: "Pintura",
        instructor: "Oscar",
    },
    {
        name: "Tallado en arsilla",
        instructor: "Pepe"
    },
    {
        name: "Marketin",
        instructor: "Pedro"
    },
    {
        name:"Carpintenria",
        description: "Se aprendera desde lo basico hasta lo mas avanzado en carpinteria",
        instructor: "Pedro"
    },
    {
        name: "Mecanica",
        instructor: "Pepe"
    },
    {
        name: "Pintura",
        instructor: "Pipe"
    },
    {
        name: "Tallado en arsilla",
        instructor: "Alex"
    },
    {
        name: "Marketin",
        instructor: "Oscar"
    }
];

const categories = [
    {
        name: "Madera",
        course_id: 1
    },
    {
        name: "Madera",
        course_id: 6
    },
    {
        name: "Mecanica",
        course_id: 2
    },
    {
        name: "Mecanica",
        course_id: 7
    },
    {
        name: "Creatividad",
        course_id: 3
    },
    {
        name: "Creatividad",
        course_id: 8
    },
    {
        name: "Creacion",
        course_id: 4
    },
    {
        name: "Creacion",
        course_id: 9
    },
    {
        name: "Social",
        course_id: 5
    },
    {
        name: "Social",
        course_id: 10
    }
];

const videos = [
    {
        name: "Conocer la madera y elegir la mejor",
        course_id: 1,
        url: "http/carpinteria",
    },
    {
        name: "Dibujo y cortado de madera",
        course_id: 1,
        url:"http",
    },
    {
        name: "Lijado y pintar",
        course_id: 1,
        url: "http"
    },
    {
        name: "Conocer la madera y elegir la mejor",
        course_id: 6,
        url: "http/carpinteria",
    },
    {
        name: "Dibujo y cortado de madera",
        course_id: 6,
        url:"http",
    },
    {
        name: "Lijado y pintar",
        course_id: 6,
        url: "http"
    },
    {
        name: "Conocer las herramientas",
        course_id: 2,
        url: "http/mecanica",
    },
    {
        name: "Desarmar y conocer sus piezas",
        course_id: 2,
        url:"http",
    },
    {
        name: "Limpiar y mantenimieto de las piezas",
        course_id: 2,
        url: "http"
    },
    {
        name: "Conocer las herramientas",
        course_id: 7,
        url: "http/mecanica",
    },
    {
        name: "Desarmar y conocer sus piezas",
        course_id: 7,
        url:"http",
    },
    {
        name: "Limpiar y mantenimieto de las piezas",
        course_id: 7,
        url: "http"
    },
    {
        name: "Elegir el espacio de trabajo",
        course_id: 3,
        url: "http/pintura",
    },
    {
        name: "Elegir pinturas y el material a trabajar",
        course_id: 3,
        url:"http",
    },
    {
        name: "Recomendaciones",
        course_id: 3,
        url: "http"
    },
    {
        name: "Elegir el espacio de trabajo",
        course_id: 8,
        url: "http/pintura",
    },
    {
        name: "Elegir pinturas y el material a trabajar",
        course_id: 8,
        url:"http",
    },
    {
        name: "Recomendaciones",
        course_id: 8,
        url: "http"
    },
    {
        name: "Materiales a Trabajar",
        course_id: 4,
        url: "http/arcilla",
    },
    {
        name: "Moldear y tallar",
        course_id: 4,
        url:"http",
    },
    {
        name: "Inspiracion y creacion",
        course_id: 4,
        url: "http"
    },
    {
        name: "Materiales a Trabajar",
        course_id: 9,
        url: "http/arcilla",
    },
    {
        name: "Moldear y tallar",
        course_id: 9,
        url:"http",
    },
    {
        name: "Inspiracion y creacion",
        course_id: 9,
        url: "http"
    },
    {
        name: "Primeros pasos para socializar",
        course_id: 5,
        url: "http/marketin",
    },
    {
        name: "Aprende a como piensan los demas",
        course_id: 5,
        url:"http",
    },
    {
        name: "Convence y crea ideas",
        course_id: 5,
        url: "http"
    },
    {
        name: "Primeros pasos para socializar",
        course_id: 10,
        url: "http/marketin",
    },
    {
        name: "Aprende a como piensan los demas",
        course_id: 10,
        url:"http",
    },
    {
        name: "Convence y crea ideas",
        course_id: 10,
        url: "http"
    },
];

const usersCourses = [
    {course_id: 1, user_id: 1},
    {course_id: 2, user_id: 3},
    {course_id: 3, user_id: 2},
    {course_id: 4, user_id: 4},
    {course_id: 5, user_id: 5},

    {course_id: 6, user_id: 2},
    {course_id: 7, user_id: 5},
    {course_id: 8, user_id: 1},
    {course_id: 9, user_id: 3},
    {course_id: 10, user_id: 4},
];



db.sync({force: true})
    .then(() => {
        console.log("insertando imformacion");

        users.forEach(user => Users.create(user));

        setTimeout(() => {
            courses.forEach(course => Courses.create(course));
        }, 200);

        setTimeout(() => {
            categories.forEach(category => Categories.create(category));
        }, 400);

        setTimeout(() => {
            videos.forEach(video => Videos.create(video));
        }, 600);

        setTimeout(() => {
            usersCourses.forEach(uc => UsersCourses.create(uc));
            console.log("se inserto imformacion");
        }, 800);
    })
