//If Statement

// let age = prompt("Enter your age: ");
let age = 20;

if (age != null && age >= 18) {
    console.log("Eligible");
} else {
    console.log("Not Eligible22");
}

//Else if 


// let mark = prompt("Enter the mark: ");

let mark = 70;

if (mark >= 90) {
    console.log('Grade A');
} else if (mark >= 80) {
    console.log('Grade B');
} else if (mark >= 60) {
    console.log('Grade C');
} else {
    console.log('Grade D');
}


//Nested IF 

/* problem Statement 

min mark >=35 
91-100 A
81-90 B
71-80 C
*/

let english = 95, tamil = 90, maths = 75;
let total, avg;
total = english + tamil + maths;
avg = total / 3;
console.log(total, avg);

if (english >= 35 && tamil >= 35 && maths >= 35) {
    console.log("Result : Pass");
    if (avg > 90 && avg <= 100) {
        console.log("Grade A");
    } else if (avg > 80 && avg <= 90) {
        console.log("Grade B");
    } else if (avg > 70 && avg <= 90) {
        console.log("Grade C");
    }
} else {
    console.log("Result : Fail");
    console.log("No Grade");
}



