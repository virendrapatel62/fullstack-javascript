const student = {
    firstName : "Virendra", 
    lastName : 'patel', 
    address : {
        street : 'something', 
        houseNumber : 89, 
        city : "jabalpur", 
        state : "MP", 
        contry : "India"
    }, 
    phones : ["12234354545" , '534534546'], 
    fullName : function (){
        return this.firstName +  " " + this.lastName
    }
}

console.log(student.firstName); // virendra
console.log(student.lastName); // patel

console.log(student.address); /** { street: 'something',
                                    houseNumber: 89,
                                    city: 'jabalpur',
                                    state: 'MP',
                                    contry: 'India' } **/

console.log(student.address.city);  // jabalpur
console.log(student.address.street); // something
console.log(student.address.houseNumber); // 89
console.log(student.fullName());  // Virendra patel

console.log(student.phones);  // [ '12234354545', '534534546' ]
console.log(student.phones[0]);  // 12234354545
console.log(student.phones[1]);  // 534534546
