const express = require("express");
const { setupApp } = require("./app");
const { createConnection } = require("./db");

const app = express();
const PORT = 3000;

setupApp(app);
createConnection()
  .then(() => {
    console.log("Mongo DB connection Created...");
  })
  .catch((error) => {
    console.error(error);
  });

app.listen(PORT, () => {
  console.log(`App is listening on http://localhost:${PORT}`);
});
