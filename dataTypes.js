/*
    1.JS is a Dynamic Programming Language
    2.No need to declare dataTypes for the variables
        Eg:  var a = 10;
    3.But C,C++,Java are STATIC Programming Language
        Eg: int a = 10;
 */

//Data Types in JavaScript

/* 
 Two Types: 1.Primitive DataType (InBuild DataType)
            2.Reference DataType

1.Primitive DataType (InBuild DataType) : 
    Number, Boolean, Null, Undefined, Symbols (E6) 

2.Reference DataType : 
    Array, Object Literals, Date
*/

/*************Examples**************/

//1.Primitive DataType

var a = 25;
var fname = "Ravi"
var isMarried = true
var phone = null
var age;

console.log(typeof a);
console.log(typeof fname);
console.log(typeof isMarried);
console.log(typeof phone);
console.log(typeof age);

//2.Reference DataType

var fruits = ['apple', 'banana', 'mango'];
var ipl = {
    team: 'CSK',
    color: 'Yellow'
}
var date = new Date();

console.log(typeof fruits);
console.log(typeof ipl);
console.log(typeof date);