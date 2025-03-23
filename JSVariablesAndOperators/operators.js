// Arithematic Operator
let x=10, y=20;
console.log("x+y : ",x+y) //30
console.log("y-x : ",y-x) //10
console.log("x*y : ",x*y) //200
console.log("13/2 : ",13/2) //6.5
console.log("12%5 : ", 12%5) //2
console.log("5**2 : ",5**2)  //25
console.log("x++ : ", x++)  //10
console.log("x : ", x)  //11
console.log("++x : ", ++x)  //12
console.log("y : ", y) //20
console.log("y-- : ", y--) // 29
console.log("y : ", y) //19
console.log("--y : ", --y) //18

// Assignment Operators
let a=7, b=5;
console.log("a+=b : ", a+=b) //12
console.log("a-+b : ", a-=b) //7
console.log("a*=b : ", a*=b) //35
console.log("a%=b : ", a%=b) //0
console.log("a/=b : ", a/=b) //o

// Relational Operators
let p=20, q=10;
console.log("p>q", p>q) //true
console.log("p<q", p<q) //false
console.log("p>=q", p>=q) //true
console.log("p<=q", p<=q) //false
console.log("p==q", p==q) //false
console.log("p!=q", p!=q) //true
console.log(p>q?p:q) // ternary operators = if p greater than q return p (20 = true)
console.log(q>p?q:p) // ternary operators = if q greater than p return q (20 = false)

// Logical Operator &&, ||, !

let s=true, t=false;

console.log("s&&t : ", s&&t) //false
console.log("s||t : ", s||t) //true
console.log("!t : ", !t) //true