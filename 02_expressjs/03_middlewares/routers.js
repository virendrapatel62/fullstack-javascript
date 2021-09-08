const { generateStudents } = require("./utils");

const endpoints = [
  "",
  "url-1",
  "url-2",
  "url-3",
  "url-4",
  "not-existing",
  "abc",
  "no-url",
  "server-error",
].map((url) => `http://localhost:3000/${url}`);

module.exports = (app) => {
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
  app.get("/server-error", (request, response, next) => {
    next(new Error("Error from /server-error url"));
  });
};
