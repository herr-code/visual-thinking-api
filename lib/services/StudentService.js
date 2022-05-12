class StudentService {
    static getAllStudents(students) {
        return students;
    }

    static getEmailStudentsWithCertification(students) {
        const studentsListEmail = students.filter(student => student.haveCertification === true)
        return studentsListEmail;
    }
}

module.exports = StudentService;