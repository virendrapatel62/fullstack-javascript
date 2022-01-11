const express = require("express");

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
  console.log(`visit : http://localhost:${PORT}`);
  console.log(`visit : http://localhost:${PORT}/students`);
});

function homeHandler(request, response) {
  const message = {
    message: "Request handled",
  };
  return response.json(message);
}

function studentHandler(request, response) {
  const students = [
    { id: 101, name: "Virendra" },
    { id: 102, name: "Justin" },
    { id: 103, name: "Harsh" },
  ];
  return response.json({ students });
}

app.get("/", homeHandler);
app.get("/students", studentHandler);
