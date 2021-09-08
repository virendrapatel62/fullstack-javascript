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

const endpoints = [
  "",
  "url-1",
  "url-2",
  "url-3",
  "url-4",
  "not-existing",
  "abc",
  "no-url",
].map((url) => `http://localhost:${PORT}/${url}`);

//  middelewares
const middleware = (request, response, next) => {
  console.log({ middleware: "1", url: request.url });
  next();
};

//  registering middleware with the app
app.use(middleware);

app.use((req, res, next) => {
  console.log({ middleware: "2", url: req.url });
  next();
});

//http://localhost:3000

app.get("/", (request, response) => {
  console.log(request.hostname);
  response.json({
    url: request.url,
    message: "Hello World..",
    endpoints,
  });
});

app.get("/url-1", (request, response) => {
  response.json({
    url: request.url,
    students: generateStudents(1),
  });
});

app.get("/url-2", (request, response) => {
  response.json({
    url: request.url,
    students: generateStudents(2),
  });
});
app.get("/url-3", (request, response) => {
  response.json({
    url: request.url,
    students: generateStudents(3),
  });
});
app.get("/url-4", (request, response) => {
  response.json({
    url: request.url,
    students: generateStudents(4),
  });
});

app.use((req, res, next) => {
  console.log("not-found  middleware");
  return res.status(404).json({ url: req.url, error: "not found" });
});

app.listen(PORT, () => {
  console.log(`App is listening on http://localhost:${PORT}`);
});
