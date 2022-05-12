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
        expect(typeof listOfStudents).toBe("object");
        expect(emailListOfStudentsWithCertification.length).toBe(51);
        expect(emailListOfStudentsWithCertification[0].name).toBe("Warren");
        expect(emailListOfStudentsWithCertification[0].email).toBe("Todd@visualpartnership.xyz");
        expect(emailListOfStudentsWithCertification[0].credits).toBe(508);
        expect(emailListOfStudentsWithCertification[0].previousCourses).toBe(1);
        expect(emailListOfStudentsWithCertification[0].haveCertification).toBeTruthy();
    });
});