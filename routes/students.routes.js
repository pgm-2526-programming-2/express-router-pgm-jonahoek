const express = require('express');
const studentsRoutes = express.Router();
const studentsController = require('../controllers/students.controller');


studentsRoutes.get("/" ,studentsController.getStudents);
studentsRoutes.get("/:id", studentsController.getStudentById);
studentsRoutes.put("/:id", studentsController.updateStudent);
studentsRoutes.post("/", studentsController.addStudent);
studentsRoutes.delete("/:id", studentsController.removeStudent);


module.exports = studentsRoutes;