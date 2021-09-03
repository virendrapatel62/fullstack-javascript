let sayHello = function () {
  console.log("Hello...");
};

sayHello();

sayHello = () => {
  console.log("Hello....");
};
sayHello();

let sayHelloTo = (name) => {
  console.log("Hello ", name);
};
sayHelloTo("Virendra");

sayHelloTo = (name) => console.log("Hello ", name);

sayHelloTo("Sandeep");

const sum = (number1, number2) => number2 + number1;
console.log(sum(12, 10));

const multiply = (number1, number2) => number2 * number1;
console.log(multiply(12, 10));
