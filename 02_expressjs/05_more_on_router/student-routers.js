const { request } = require("express");
const express = require("express");

const studentRouter = express.Router();

studentRouter.all("*", (req, res, next) => {
  console.log({
    message: "Doing common work here...",
    url: req.url,
    method: req.method,
  });
  next();
});

studentRouter.use((request, response, next) => {
  console.log({
    message: "Middleware of student Router",
    url: request.url,
    method: request.method,
  });

  next();
});

studentRouter.get("/", (req, res) => {
  res.json({
    method: req.method,
    url: req.originalUrl,
  });
});

studentRouter.get("/:id", (req, res) => {
  res.json({
    method: req.method,
    url: req.originalUrl,
  });
});

studentRouter.post("/", (req, res) => {
  res.json({
    method: req.method,
    url: req.originalUrl,
  });
});

studentRouter.delete("/", (req, res) => {
  res.json({
    method: req.method,
    url: req.originalUrl,
  });
});

studentRouter.put("/", (req, res) => {
  res.json({
    method: req.method,
    url: req.originalUrl,
  });
});

module.exports = {
  studentRouter,
};
