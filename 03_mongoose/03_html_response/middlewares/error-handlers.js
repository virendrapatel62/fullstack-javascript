const error404Handler = (req, res) => {
  return res.render("error-pages/404");
};

const error500Handler = (error, req, res, next) => {
  console.log("In Error handler", error);
  return res.render("error-pages/500", { message: error.message });
};

module.exports = {
  error404Handler,
  error500Handler,
};
