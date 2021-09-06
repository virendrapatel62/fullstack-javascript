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
        about: faker.lorem.paragraph(2),
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

app.get("/students/generate", (request, response) => {
  const count = +request.query.count;
  if (!count) return response.render("students/random-students-form");

  const students = generateStudents(count);
  return response.render("students/students", { students: students });
});

// https://localhost:3000/students/uuid
app.get("/students/:uuid", (request, response) => {
  const uuid = request.params.uuid;
  const student = allStudents.find((student) => student.id === uuid);
  return response.render("students/student", { student });
});

app.listen(PORT, () => {
  console.log(`App is listening on http://localhost:${PORT}`);
});
