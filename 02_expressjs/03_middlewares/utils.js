const faker = require("faker");

function generateStudents(count) {
  return count
    ? new Array(count).fill().map((index) => ({
        id: faker.datatype.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
      }))
    : [];
}

module.exports = {
  generateStudents,
};
