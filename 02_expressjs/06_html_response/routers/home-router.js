const router = require("express").Router();
router.get("/", (request, response) => {
  return response.render("home/index.html", {
    title: "Home Page",
    message: "Hi, User 🤚",
  });
});

module.exports = {
  homeRouter: router,
};
