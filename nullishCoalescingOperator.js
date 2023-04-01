//Nullish coalescing operator ( ?? )

const a = null ?? 'No value';
console.log(a);

const b = null ?? 45;
console.log(b);

//??= 

const user = { fruit: 'apple', color: 'red' }
console.table(user);

user.price ??= 50;
console.table(user);