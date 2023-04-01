//Type Conversion 

//String From Number, decimal, boolean, Object, Array

let a = 25;
console.log(a, typeof a);
a = String(a);
console.log(a, typeof a);

a = 2.55
console.log(a, typeof a);
a = a.toString();
console.log(a, typeof a);


//Number [ note : if Object,Array,Letters it will give NaN] 

let b = '125';
console.log(b, typeof b);
b = Number(b);
console.log(b, typeof b);

let c = '135';
c = parseInt(c);
console.log(c, typeof c);