// https://mongoosejs.com/docs/5.x/docs/schematypes.html#schematype-options

const { Schema } = require("mongoose");
const mongoose = require("mongoose");
const faker = require("faker");

const studentSchema = new Schema({
  firstName: {
    type: Schema.Types.String,
    required: true,
  },
  lastName: {
    type: Schema.Types.String,
    required: true,
  },
  about: {
    type: Schema.Types.String,
    required: true,
  },
  image: {
    type: Schema.Types.String,
    default: faker.image.avatar,
  },
  phone: {
    type: [String],
  },
});

const Student = mongoose.model("Student", studentSchema);

module.exports = { Student };
