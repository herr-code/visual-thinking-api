const StudentService = require("./../../lib/services/StudentService");

describe("Tests for StudentService", () => {
    const students = [
        {name: "Yoselin", email: "yos@gmail.com", credits: 350},
        {name: "Teresa", email: "tere@gmail.com", credits: 400},
        {name: "Diana", email: "diana@gmail.com", credits: 600},
        {name: "Abril", email: "abril@gmail.com", credits: 650},
        {name: "Fatima", email: "fatima@gmail.com", credits: 700},
    ];
    test("Requirement 1: Get all students", () => {
        const studentsList = StudentService.getAllStudents(students);
        expect(typeof studentsList).toBe("object");
        expect(studentsList.length).toBe(5);
        expect(studentsList[4].name).toBe("Fatima");
        expect(studentsList[4].email).toBe("fatima@gmail.com");
        expect(studentsList[4].credits).toBe(700);
    });
});