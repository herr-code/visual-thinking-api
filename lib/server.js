const StudentController = require("./controllers/StudentController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "Visual Partner Api welcome!"});
});

app.get("/v1/students", (request, response) => {
    const listOfStudents = StudentController.getListOfStudents();
    response.json(listOfStudents);
});

app.get("/v1/students/certificated/email", (request, response) => {
    const emailListOfStudentsWithCertification = StudentController.getEmailsOfStudentsWithCertification();
    response.json(emailListOfStudentsWithCertification);
});

app.get("/v1/students/credits/greaterthan/:credits", (request, response) => {
    const credits = request.params.credits;
    const listOfStudentsGreaterThan = StudentController.getListOfStudentsWithCreditsGreaterThan(credits);
    response.json(listOfStudentsGreaterThan);
});

app.listen(port, () => {
    console.log(`Visual Partner API in localhost:${port}`);
});