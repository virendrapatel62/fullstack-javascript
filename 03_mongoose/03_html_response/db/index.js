const mongoose = require("mongoose");

function createConnection() {
  const databaseName = "htmlResponseApp";
  const DBConnectionUrl = `mongodb://localhost:27017/${databaseName}`;

  console.log({databaseName , DBConnectionUrl})

  // creating mongo db connection
  return mongoose.connect(DBConnectionUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

module.exports = {
  createConnection,
};
