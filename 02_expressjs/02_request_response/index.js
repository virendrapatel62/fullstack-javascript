const express = require("express");
const faker = require("faker");
const app = express();
const PORT = 3000;

function generateStudents(count) {
  return count
    ? new Array(count).fill().map((index) => ({
        id: faker.datatype.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
      }))
    : [];
}

const fakeStudents = generateStudents(5);

//http://localhost:3000

app.get("/", (request, response) => {
  response.json({
    url: request.url,
    message: "Response from Arrow Funtion.",
  });
});

// https://localhost:3000/students

app.get("/students", (request, response) => {
  response.json({
    url: request.url,
    students: fakeStudents,
  });
});

// https://localhost:3000/students/uuid
app.get("/students/:uuid", (request, response) => {
  const uuid = request.params.uuid;
  const student = fakeStudents.find((student) => student.id === uuid);
  return student
    ? response.json({
        url: request.url,
        student: student,
      })
    : response.status(404).json({ message: "Not Found" });
});

// https://localhost:3000/students/generate/<number-of-student-want-to-generate>
app.get("/students/generate/:count", (request, response) => {
  const count = +request.params.count;
  const students = generateStudents(count);
  response.json({
    url: request.url,
    students: students,
  });
});

app.listen(PORT, () => {
  console.log(`App is listening on http://localhost:${PORT}`);
});
