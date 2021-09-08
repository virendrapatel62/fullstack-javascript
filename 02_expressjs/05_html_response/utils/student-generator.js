const faker = require("faker");

function generateStudents(count) {
  const students = count
    ? new Array(count).fill().map((index) => ({
        id: faker.datatype.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        about: faker.lorem.paragraph(2),
        image: faker.image.avatar(),
      }))
    : [];
  return students;
}

module.exports = { generateStudents };
