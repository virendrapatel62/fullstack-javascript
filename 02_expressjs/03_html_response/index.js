const express = require("express");
const faker = require("faker");
const swig = require("swig");
const app = express();
const PORT = 3000;

app.engine("html", swig.renderFile);
app.set("view engine", "html");
app.use(express.static("public"));
swig.setDefaults({
  cache: false,
});
var allStudents = [];

function generateStudents(count) {
  const students = count
    ? new Array(count).fill().map((index) => ({
        id: faker.datatype.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
      }))
    : [];
  allStudents = allStudents.concat(students);
  return students;
}

const fakeStudents = generateStudents(10);

//http://localhost:3000

app.get("/", (request, response) => {
  return response.render("home/index", {
    title: "Home Page",
    message: "Hi, User 🤚",
  });
});

// https://localhost:3000/students

app.get("/students", (request, response) => {
  return response.render("students/students", { students: fakeStudents });
});

// https://localhost:3000/students/uuid
app.get("/students/:uuid", (request, response) => {
  const uuid = request.params.uuid;
  const student = allStudents.find((student) => student.id === uuid);
  return response.render("students/student", { student });
});

// https://localhost:3000/students/generate/<number-of-student-want-to-generate>
app.get("/students/generate/:count", (request, response) => {
  const count = +request.params.count;
  const students = generateStudents(count);
  return response.render("students/students", { students: students });
});

app.listen(PORT, () => {
  console.log(`App is listening on http://localhost:${PORT}`);
});
