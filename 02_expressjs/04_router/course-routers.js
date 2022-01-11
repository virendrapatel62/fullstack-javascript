const express = require("express");

const courseRouter = express.Router();

courseRouter.get("/", (req, res) => {
  res.json({
    method: req.method,
    url: req.originalUrl,
    meta: {
      from: "course router",
    },
  });
});

courseRouter.get("/:id", (req, res) => {
  res.json({
    method: req.method,
    url: req.originalUrl,
    meta: {
      from: "course router",
    },
  });
});

courseRouter.post("/", (req, res) => {
  res.json({
    method: req.method,
    url: req.originalUrl,
  });
});

courseRouter.delete("/", (req, res) => {
  res.json({
    method: req.method,
    url: req.originalUrl,
  });
});

courseRouter.put("/", (req, res) => {
  res.json({
    method: req.method,
    url: req.originalUrl,
  });
});

module.exports = {
  courseRouter,
};
