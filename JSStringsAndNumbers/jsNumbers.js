
// Number in JS is itself is Object

let x=12, y=1232.55, z=10e3, q="Sachin";
let a=new Number(4765);

console.log(x,y,z);   //12 1232.55 10000

// isInteger()
console.log(Number.isInteger(x));  //true
console.log(Number.isInteger(z));  //true
console.log(Number.isInteger(q)); //false

// parseInt() -> connvert string into a Number
let s="Welcome";
a="1234";
console.log(parseInt(s)); //NaN
console.log(parseInt(a)); // 1234 

// parseFloat() 
a="345.630";
s="Welcome";
console.log(parseFloat(s)); // NaN
console.log(parseFloat(a));  //345.63

// toString() => convert number into String
let d=54323.22;
console.log(Number.toString(d));
console.log(typeof(d)); // number
console.log(typeof(Number.toString(d))); //string
