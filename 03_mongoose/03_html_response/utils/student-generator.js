const faker = require("faker");

function generateStudents(count) {
  const students = count
    ? new Array(count).fill().map((_, index) => ({
        id: faker.datatype.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        about: faker.lorem.paragraph(2),
        image: `https://i.pravatar.cc/150?img=${index}`,
      }))
    : [];
  return students;
}

module.exports = { generateStudents };
