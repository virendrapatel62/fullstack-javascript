const express = require("express");
const mongoose = require("mongoose");
const {
  name: { firstName, lastName },
  image: { avatar },
} = require("faker");
const app = express();

const databaseName = "studentDatabase";
const DBConnectionUrl = `mongodb://localhost:27017/${databaseName}`;
// creating mongo db connection
mongoose
  .connect(DBConnectionUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Mongoose Connected...");
  });

// creating server
app.listen(3000, () => {
  console.log("App is listening on port 3000");
});

// creating Mongoose Model
const Student = mongoose.model("Student", {
  firstName: String,
  lastName: String,
  image: String,
});

// get request Handler
app.get("/api/students", (req, res) => {
  const sortBy = req.query.sortBy;
  Student.find()
    .sort(sortBy)
    .then((students) => {
      res.json({
        count: students.length,
        students,
      });
    });
});

// generate Students Handler
app.get("/api/students/generate", (req, res) => {
  const students = new Array(10).fill().map(() => {
    return {
      firstName: firstName(),
      lastName: lastName(),
      image: avatar(),
    };
  });

  Student.create(students).then((result) => {
    res.json({ result });
  });
});
