/*
1997
    var 
2015 E6
    let
    const 
*/

var a = 2;
var b = 3;
console.log(a + b);

/***********************1.Scope****************************/

if (true) {
    // var message = 'Hello World!'
    //message will work both inside the scope {} and outside

    // let message = 'Hello World!'
    //message will work only inside the scope

    const message = 'Hello World!'
    //message will work only inside the scope

    console.log(message);
}

// VAR act as a GLOBAL SCOPE
//LET and CONST will throw Error because it will work only inside the scope
// console.log(message);


/***********************2.Variable Re-declaration****************************/

/*
var a = 25;
var a = 30;
console.log(a);  //VAR will allow re-declaration
*/

/*
let a = 25;
let a = 30;
console.log(a); //LET and CONST won't allow re-declaration
*/

/***********************3.Value Assignment****************************/


/*
var a = 25;
a = 30;
console.log(a);  //VAR will allow re-assignment
*/


/*
let a = 25;
a = 30;
console.log(a);  //LET will allow re-assignment
*/


/*
const a = 25;
a = 30;
console.log(a);  //CONST won't allow re-assignment
*/

const student = { studentName: 'John', age: 10 }
console.table(student);
student.studentName = 'Wick';
console.table(student); //CONST allow re-assignment in Object value change




