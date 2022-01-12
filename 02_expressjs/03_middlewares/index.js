// https://expressjs.com/en/guide/writing-middleware.html

const express = require("express");
const app = express();
const PORT = 3000;

const configureUrls = require("./routers");

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

configureUrls(app);

app.use((req, res, next) => {
  console.log("not-found  middleware");
  return res.status(404).json({ url: req.url, error: "not found" });
});

// error handler moddleware

app.use((error, req, res, next) => {
  res.status(500).json({
    error: error.message,
    statusCode: 500,
  });
});

app.listen(PORT, () => {
  console.log(`App is listening on http://localhost:${PORT}`);
});
