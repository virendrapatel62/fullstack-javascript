let student = {};

console.log(typeof student); //object

student.name = "virendra"; // { name: 'virendra'}
student.age = 23; // { name: 'virendra', age: 23 }
student.canVote = true; // { name: 'virendra', age: 23, canVote: true }

console.log({ student }); //{ student: { name: 'virendra', age: 23, canVote: true } }

let person = {
  name: "virendra",
  age: 19,
  canVote: false,
};

console.log({ person }); //{ person: { name: 'virendra', age: 19, canVote: false } }

console.log(person.name); //virendra
console.log(person.canVote); // false
console.log(person.age); // 19
console.log(person.something); // undefined
