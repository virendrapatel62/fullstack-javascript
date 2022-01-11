const { response } = require("express");
const express = require("express");
const faker = require("faker");
const app = express();
const PORT = 3000;
app.use(express.json());

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
const host = `http://localhost:${PORT}`;
const urls = [
  "/students",
  ...fakeStudents.map((student) => `/students/${student.id}`),
  `/students/generate/10`,
  `/students/generate/20`,
  `/students/generate/100`,
].map((url) => `${host}${url}`);

//http://localhost:3000

app.get("/", (request, response) => {
  response.json({
    url: request.url,
    message: "Response from Arrow Function.",
    urls,
  });
});

// https://localhost:3000/students

app.get("/students", (request, response) => {
  const sortBy = request.query.sortBy;
  students = [...fakeStudents];

  const generalSortFunction = (value1, value2) =>
    value1 === value2 ? 0 : value1 > value2 ? 1 : -1;

  if (sortBy) {
    const sorts = {
      firstName: (s1, s2) => generalSortFunction(s1.firstName, s2.firstName),
      lastName: (s1, s2) => generalSortFunction(s1.lastName, s2.lastName),
      id: (s1, s2) => generalSortFunction(s1.id, s2.id),
    };
    students.sort(sorts[sortBy]);
  }

  response.json({
    sortBy,
    url: request.url,
    students,
  });
});

app.post("/students", (request, response) => {
  const { firstName, lastName } = request.body;
  if (!firstName || !lastName) {
    return response.status(400).json({
      error: "first Name and last Name are required.",
    });
  }
  const student = {
    firstName,
    lastName,
    id: faker.datatype.uuid(),
  };
  fakeStudents.push(student);

  response.json({
    url: request.url,
    student,
  });
});

app.put("/students/:id", (req, response) => {
  return response.json({
    message: "updating the student with id " + req.params.id,
  });
});

app.delete("/students/:id", (req, response) => {
  return response.json({
    message: "deleting the student with id " + req.params.id,
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
  console.log({ visit: urls });
});
