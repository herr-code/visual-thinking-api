const Reader = require("../utils/Reader");
const StudentService = require("../services/StudentService");

class StudentController {
    static getListOfStudents() {
        const studentsList = Reader.readJsonFile("visualpartners.json");
        return StudentService.getAllStudents(studentsList);
    }

    static getEmailsOfStudentsWithCertification() {
        const studentsList = Reader.readJsonFile("visualpartners.json");
        return StudentService.getEmailStudentsWithCertification(studentsList);
    }

    static getListOfStudentsWithCreditsGreaterThan(credits) {
        const studentsList = Reader.readJsonFile("visualpartners.json");
        return StudentService.getStudentsWithCreditsGreaterThan(studentsList, credits);
    }
}

module.exports = StudentController;