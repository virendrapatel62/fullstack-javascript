var minifyHTML = require("express-minify-html");
const swig = require("swig");
const express = require("express");
const { error404Handler, error500Handler } = require("./error-handlers");

function registerMiddlewares(app) {
  app.engine("html", swig.renderFile);
  app.set("view engine", "html");
  app.use(express.static("public"));
  app.use(
    minifyHTML({
      override: true,
      exception_url: false,
      htmlMinifier: {
        removeComments: true,
        collapseWhitespace: true,
        collapseBooleanAttributes: true,
        removeAttributeQuotes: false,
        removeEmptyAttributes: true,
        minifyJS: true,
      },
    })
  );
}

module.exports = { registerMiddlewares, error404Handler, error500Handler };
