//Looping Statement

//While Loop 
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

//Do While Loop

let j = 10;

do {
    console.log(j);
    j--;
} while (j >= 0);

//For loop 

let arr = []
for (let i = 0; i < 10; i++) {
    arr[i] = i;
}

console.log(arr);

let num = [];
for (let i = 0; i < 5; i++) {
    num.push([]);
    for (let j = 0; j < 5; j++) {
        num[i].push(i * j);
    }
}

console.table(num);

//For of Loop 

let fruits = ["apple", "banana", "mango", "orange"];

/*for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}*/

for (let fruit of fruits) {
    console.log(fruit);
}

//For in Loop

let users = {
    name: "Siva",
    age: 40,
    city: "Chennai"
};

for (let user in users) {
    console.log(user, ':', users[user]);
}

//Looping over objects by converting to an array 

let users_key = Object.keys(users);
console.table(users_key);

let users_values = Object.values(users);
console.table(users_values);
// console.log(users[users_key[0]]); 


//Break and Continue Statements 

for (let i = 1; i <= 5; i++) {
    if (i == 3) {
        continue;
    }
    if (i == 4) {
        break;
    }
    console.log(i);
}