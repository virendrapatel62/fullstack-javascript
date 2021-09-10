const mongoose = require("mongoose");

function createConnection() {
  const DBUsername = "javascript";
  const DBPassword = "javascript-demo";
  const DatabaseName = "htmlResponseApp";
  const DBConnectionUrl = `mongodb+srv://${DBUsername}:${DBPassword}@demo-cluster.r6ckc.mongodb.net/${DatabaseName}?retryWrites=true&w=majority`;

  // creating mongo db connection
  return mongoose.connect(DBConnectionUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

module.exports = {
  createConnection,
};
