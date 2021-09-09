const { generateStudents } = require("../utils");

const router = require("express").Router();
let allStudents = [];

router.get("/", (request, response) => {
  const students = generateStudents(10);
  allStudents = [...allStudents, ...students];
  return response.render("students/students", {
    students,
    title: "Students",
  });
});

router.get("/generate", (request, response) => {
  const count = +request.query.count;
  if (!count)
    return response.render("students/random-students-form", {
      title: "Student Generator",
    });

  const students = generateStudents(count);
  allStudents = [...allStudents, ...students];
  return response.render("students/students", {
    students: students,
    title: `Showing ${students.length} Students`,
  });
});

// https://localhost:3000/students/uuid
router.get("/:uuid", (request, response) => {
  const uuid = request.params.uuid;
  const student = allStudents.find((student) => student.id === uuid);
  return response.render("students/student", {
    student,
    title: student ? student.firstName : "not-found",
  });
});

module.exports = {
  studentRouter: router,
};
