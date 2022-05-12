describe("Tests for StudentService", () => {
    const students = [
        {name: "Yoselin", email: "yos@gmail.com", credits: 500},
        {name: "Teresa", email: "tere@gmail.com", credits: 550},
        {name: "Diana", email: "diana@gmail.com", credits: 600},
        {name: "Abril", email: "abril@gmail.com", credits: 650},
        {name: "Fatima", email: "fatima@gmail.com", credits: 700},
    ];
    test("Requirement 1: Get all students", () => {
        const studentsList = StudentService.getAllStudents(students);
        expect(studentsList.length).toBe(5);
    });
});