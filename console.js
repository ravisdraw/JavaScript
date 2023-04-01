console.log('Hello World');
console.log(12345);
console.log(11.25);
console.log(true);

console.log([11, 22, 939, 12, 44]); //Array
console.log({ userId: 1, userName: 'name' }); //Object
console.table({ userId: 1, userName: 'name' });

console.error('Custom Error Message');
console.warn('Custom Warning Message');

console.time("Timer"); // Initializing timer with unique Name for it
for (i = 0; i < 10; i++) {
    console.log(i);
}
console.timeEnd("Timer"); // Terminating timer after particular work done

// console.clear(); 