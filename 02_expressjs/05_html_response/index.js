const express = require("express");
const { setupApp } = require("./app");
const app = express();
const PORT = 3000;

setupApp(app);

app.listen(PORT, () => {
  console.log(`App is listening on http://localhost:${PORT}`);
});
