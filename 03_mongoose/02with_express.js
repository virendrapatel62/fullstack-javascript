const express = require("express");
const mongoose = require("mongoose");
const app = express();

const DBUsername = "javascript";
const DBPassword = "javascript-demo";
const DatabaseName = "StudentsDatabase";
const DBConnectionUrl = `mongodb+srv://${DBUsername}:${DBPassword}@demo-cluster.r6ckc.mongodb.net/${DatabaseName}?retryWrites=true&w=majority`;

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

const Student = mongoose.model("Student", {
  firstName: String,
  lastName: String,
});

app.get("/api/students", (req, res) => {
  Student.find().then((students) => {
    res.json({
      students,
    });
  });
});
