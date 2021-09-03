function log(message) {
  console.log(new Date().toUTCString(), ":", message);
}

module.exports.logger = log;
