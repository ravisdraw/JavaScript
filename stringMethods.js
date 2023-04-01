// String Methods 

let firstName = "Ravi";
let lastName = "Kumar";


console.log(firstName + lastName); //Manual Concatenation
console.log(firstName.concat(' ', lastName)); //You can add many strings

a = 'She can\'t run';
console.log(a); //Escaping 

console.log(firstName.length); //Length 

console.log(firstName.toUpperCase());
console.log(lastName.toLowerCase());

console.log("apple".indexOf('p'));
console.log("apple".lastIndexOf('p'));

console.log(firstName.charAt(0));
console.log(firstName.charCodeAt(0));

console.log(firstName.substr(1, 3)); //@deprecated i.e it is not used in recent times
console.log(firstName.substring(0, 3));
console.log(firstName.slice(0, 3));