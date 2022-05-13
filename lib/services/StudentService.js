class StudentService {
    static getAllStudents(students) {
        return students;
    }

    static getEmailStudentsWithCertification(students) {
        const studentsWithCertification = students.filter(student => student.haveCertification === true);
        const studentsEmailList = studentsWithCertification.map(({name, email}) => ({["name"]: name, ["email"]: email}));
        return studentsEmailList;
    }

    static getStudentsWithCreditsGreaterThan(students, credits) {
        const studentsGreaterThan = students.filter(student => student.credits > credits);
        return studentsGreaterThan;
    }
}

module.exports = StudentService;