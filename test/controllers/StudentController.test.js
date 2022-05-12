describe("Tests for StudentController", () => {
    test("Requirement 1: Get all students using StudentService", () => {
        const listOfStudents = ExplorerController.getListOfStudents();
        expect(typeof listOfStudents).toBe("object");
        expect(listOfStudents.length).toBe(10);
    });
});