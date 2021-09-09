// https://mongoosejs.com/docs/5.x/

const mongoose = require("mongoose");
const faker = require("faker");

const DBUsername = "javascript";
const DBPassword = "javascript-demo";
const DatabaseName = "StudentsDatabase";
const DBConnectionUrl = `mongodb+srv://${DBUsername}:${DBPassword}@demo-cluster.r6ckc.mongodb.net/${DatabaseName}?retryWrites=true&w=majority`;

mongoose
  .connect(DBConnectionUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    socketTimeoutMS: 100000,
  })
  .then(() => {
    console.log("Mongo DB conneced...");
  });

const Student = mongoose.model("Student", {
  firstName: String,
  lastName: String,
});

function createUser() {
  const student = new Student({
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
  });

  student.save().then((savedUser) => console.log(savedUser));
}

function getAllStudents() {
  Student.find().then((students) => {
    console.log(students);
  });
}

createUser();
getAllStudents();
