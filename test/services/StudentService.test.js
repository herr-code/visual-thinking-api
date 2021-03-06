const StudentService = require("./../../lib/services/StudentService");

describe("Tests for StudentService", () => {
    const students = [
        {name: "Yoselin", email: "yos@gmail.com", credits: 350, haveCertification: true},
        {name: "Teresa", email: "tere@gmail.com", credits: 400, haveCertification: false},
        {name: "Diana", email: "diana@gmail.com", credits: 600, haveCertification: false},
        {name: "Abril", email: "abril@gmail.com", credits: 650, haveCertification: false},
        {name: "Fatima", email: "fatima@gmail.com", credits: 700, haveCertification: true}
    ];
    test("Requirement 1: Get all students", () => {
        const studentsList = StudentService.getAllStudents(students);
        expect(typeof studentsList).toBe("object");
        expect(studentsList.length).toBe(5);
        expect(studentsList[4].name).toBe("Fatima");
        expect(studentsList[4].email).toBe("fatima@gmail.com");
        expect(studentsList[4].credits).toBe(700);
    });

    test("Requirement 2: Get all email of students with certification", () => {
        const studentsListEmail = StudentService.getEmailStudentsWithCertification(students);
        expect(typeof studentsListEmail).toBe("object");
        expect(studentsListEmail.length).toBe(2);
        expect(studentsListEmail[0].name).toBe("Yoselin");
        expect(studentsListEmail[0].email).toBe("yos@gmail.com");
    });

    test("Requirement 3: Get all students with credits greater than (500)", () => {
        const credits = 500;
        const studentsListGreaterThan = StudentService.getStudentsWithCreditsGreaterThan(students, credits);
        expect(typeof studentsListGreaterThan).toBe("object");
        expect(studentsListGreaterThan.length).toBe(3);
        expect(studentsListGreaterThan[0].name).toBe("Diana");
        expect(studentsListGreaterThan[0].email).toBe("diana@gmail.com");
        expect(studentsListGreaterThan[0].credits).toBe(600);
        expect(studentsListGreaterThan[0].haveCertification).not.toBeTruthy();
    });
});