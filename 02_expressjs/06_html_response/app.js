const swig = require("swig");
const {
  registerMiddlewares,
  error500Handler,
  error404Handler,
} = require("./middlewares");
const { studentRouter, homeRouter } = require("./routers");

const setupApp = (app) => {
  swig.setDefaults({
    cache: false,
  });

  registerMiddlewares(app);

  app.use(homeRouter);
  app.use("/students", studentRouter);

  app.get("/server-error", (request, response, next) => {
    next(new Error("An Error From /server-error page"));
  });

  app.use(error404Handler);
  app.use(error500Handler);
  // https://localhost:3000/students
};

module.exports = { setupApp };
