const { Student } = require("../models/student");
const { generateStudents } = require("../utils");
const faker = require("faker");
const { fake } = require("faker");

const router = require("express").Router();

router.get("/", async (request, response) => {
  const students = await Student.find({});
  return response.render("students/students", {
    students,
    title: "Students",
  });
});

router.get("/create", async (request, response) => {
  const prefilled = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    about: faker.lorem.paragraph(2),
    image: `https://i.pravatar.cc/150?img=${Math.random()}`,
  };
  response.render("students/student-form", { ...prefilled });
});

router.post("/create", async (request, response) => {
  const student = request.body;
  Student.create({ ...student }).then((student) => {
    const prefilled = {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      about: faker.lorem.paragraph(2),
      image: `https://i.pravatar.cc/150?img=${Math.random()}`,
    };
    response.render("students/student-form", {
      message: "User Created..",
      ...prefilled,
    });
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
router.get("/:uuid", async (request, response) => {
  const uuid = request.params.uuid;
  const student = await Student.findById(uuid);
  return response.render("students/student", {
    student,
    title: student ? student.firstName : "not-found",
  });
});

// https://localhost:3000/students/uuid
router.post("/delete/:uuid", async (request, response) => {
  const uuid = request.params.uuid;
  Student.deleteOne({ _id: uuid }).then((result) => {
    console.log(result);
    return response.redirect("/students");
  });
});

module.exports = {
  studentRouter: router,
};
