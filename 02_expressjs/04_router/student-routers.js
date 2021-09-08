const express = require("express");

const studentRouter = express.Router();

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
