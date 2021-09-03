function sayHello(){
    console.log('Hello...');
}

function sayHelloTo(name){
    console.log('Hello ' + name);
}

sayHello()
sayHelloTo('Virendra')  // with input 

function doSum(number1 , number2){
    return number1 + number2
}

function doubleIt(number){
    return number* number
}

function sumAndThenDoubleIt(number1 , number2){
    const sum = doSum(number1 , number2)
    const double = doubleIt(sum)
    return double
}

console.log(doSum(10 ,10));
console.log(doubleIt(20 ));
console.log(sumAndThenDoubleIt(10, 10));