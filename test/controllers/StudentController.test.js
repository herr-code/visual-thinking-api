const StudentController = require("./../../lib/controllers/StudentController");

describe("Tests for StudentController", () => {
    test("Requirement 1: Get all students using StudentService", () => {
        const listOfStudents = StudentController.getListOfStudents();
        expect(typeof listOfStudents).toBe("object");
        expect(listOfStudents.length).toBe(51);
        expect(listOfStudents[0].name).toBe("Warren");
        expect(listOfStudents[0].email).toBe("Todd@visualpartnership.xyz");
        expect(listOfStudents[0].credits).toBe(508);
        expect(listOfStudents[0].previousCourses).toBe(1);
        expect(listOfStudents[0].haveCertification).toBeTruthy();
    });

    test("Requirement 2: Get all email of students with certification using StudentService", () => {
        const emailListOfStudentsWithCertification = StudentController.getEmailsOfStudentsWithCertification();
        expect(typeof emailListOfStudentsWithCertification).toBe("object");
        expect(emailListOfStudentsWithCertification.length).toBe(29);
        expect(emailListOfStudentsWithCertification[0].name).toBe("Warren");
        expect(emailListOfStudentsWithCertification[0].email).toBe("Todd@visualpartnership.xyz");
    });

    test("Requirement 3: Get all students with credits greater than (500)", () => {
        const credits = 500;
        const listOfStudentsGreaterThan = StudentController.getListOfStudentsWithCreditsGreaterThan(credits);
        expect(typeof listOfStudentsGreaterThan).toBe("object");
        expect(listOfStudentsGreaterThan.length).toBe(27);
        expect(listOfStudentsGreaterThan[0].name).toBe("Warren");
        expect(listOfStudentsGreaterThan[0].email).toBe("Todd@visualpartnership.xyz");
        expect(listOfStudentsGreaterThan[0].credits).toBe(508);
    });
});