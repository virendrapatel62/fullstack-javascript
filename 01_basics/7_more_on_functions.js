// assigning function to a varible

const sayHello = function (){
    console.log("Hello ....");
}

const sayHelloTo = function (name){
    console.log("Hello" , name );
}

sayHello()
sayHelloTo("Virendra")

const doSum = function (num1 , num2 ){
    const sum = num1 + num2
    return sum 
}

console.log(doSum(10 , 20));