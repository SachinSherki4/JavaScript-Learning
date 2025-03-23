//	Container to store data of particular type.
//	Can create variable using let, var and const keywords.

// *** var Keywords**
// single and multiple line variable diclaration
//we can define js variable using let, var and const keywords

var x; // diclaration
x=10   // initialization
ss="Welcome Sachin"

var a=10; // diclaration+initialization

var b=15, c=30; // multiple variable

document.write("a+b : ",a+b)
console.log("x : ",ss)
console.log("a : ",a)
console.log("b+c : ",b+c)
console.log("a+c : ",a+c) 

// **difference between var and let
// all same except below 
// var is functions scope
// let is block scoped

console.log(d)
var d=10; // undefine no error
//let d   // error : Uncaught Reference Error Cannot access d before initialization
console.log(d) 

// ***const keywords***
// once define cannot change  it value

const v=100;
console.log(v)
//v=200; // Uncaught TypeError: Assignment to constant variable.
console.log(v)


// *** Data Types in jS*****

var  q=28, e=23.4, s="Sachin", flag=true, statu=null, valu;
console.log(typeof(q)) //number
console.log(typeof(e)) // number
console.log(typeof(s)) //string
console.log(typeof(flag)) //boolean
console.log(typeof(statu)) // object (when assign null value)
console.log(typeof(valu)) //undefined (not assign any value)
