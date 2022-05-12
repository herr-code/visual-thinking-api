const Reader = require("../utils/Reader");
const StudentService = require("../services/StudentService");

class StudentController {
    static getListOfStudents(mission) {
        const studentsList = Reader.readJsonFile("visualpartners.json");
        return StudentService.getAllStudents(studentsList);
    }
}

module.exports = StudentController;