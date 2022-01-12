// https://expressjs.com/en/guide/routing.html

const express = require("express");
const { studentRouter } = require("./student-routers");
const { courseRouter } = require("./course-routers");
const PORT = 3000;
const app = express();

app.get("/", (request, response) => {
  return response.json({
    url: request.url,
    message: "This is home page",
  });
});

app.use("/students", studentRouter);
app.use("/courses", courseRouter);

app.use((req, res) => {
  res.status(404).json({
    errro: "request url not found.",
  });
});

app.listen(3000, () => {
  console.log(`App is listening on port ${PORT}`);
});
