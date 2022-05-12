const StudentController = require("./controllers/StudentController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "Visual Partner Api welcome!"});
});

app.get("/v1/students/", (request, response) => {
    const listOfStudents = StudentController.getListOfStudents();
    response.json(listOfStudents);
});

app.listen(port, () => {
    console.log(`Visual Partner API in localhost:${port}`);
});