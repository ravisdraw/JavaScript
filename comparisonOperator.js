//Comparison Operators

let a = 10;
let b = 20;
console.log(a == b); //It won't check for the type
console.log(a != b);

let c = 10;
let d = "10";
console.log(c == d);
console.log(c === d); //It will check for the type


//Relational Operators 

let num1 = 10;
let num2 = 20;

console.log("Greater", num1 > num2);
console.log("Lesser", num1 < num2);
console.log("Greater Than Equal", num1 >= num2);
console.log("Lesser Than Equal", num1 <= num2);

//Logical Operators - AND,OR,NOT

let mark = 45;
let num = 5;

console.log(mark >= 35 && mark <= 100);
console.log(num == 2 || num == 5);