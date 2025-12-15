const express = require('express');
const studentsRouter = express.Router();
const router = require("./controllers/students.controller");

router.get("/" ,studentsController.getStudents);
router.get("/id", studentsController.getStudentById);
router.put(":id", studentsController.updateStudent);
router.post("/", studentsController.addStudent);
router.delete(":id", studentsController.removeStudent);

module.exports = studentsRouter;