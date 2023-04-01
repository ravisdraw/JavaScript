//Ternary Operator (?!)


const age = 25;
const result = age >= 18 ? "Yes" : "No"
console.log(result);

//Handling Null values

function welcome(name) {
    const result = name ? name : "No Name"
    console.log("welcome", result);
}

welcome();
welcome(null);
welcome('Ravi');

user = { name: 'Ravi', age: 25 }

const greetings = (user) => {
    const result = user ? user : "No Name"
    return "Hello " + result;
}

console.log(greetings());
console.log(greetings('Ravi'));


//Conditional Chains

/*
    avg >= 90 A grade
    avg >= 80 B grade
    C grade
*/

const avg = 80;
const grade = avg >= 90 ? 'A Grade' : avg >= 80 ? 'B Grade' : 'C Grade';
console.log(grade);