console.log("verify person eligible for vote or  not = age above  18 years")

let person_age=20;

if(person_age>=18){
    console.log("Person Eligible  for Vote....");
}
else{
    console.log("Person not eligible for Vote...");
}
console.log("Program exited..")

console.log("verify number is even or odd")
let num=10;
if(num%2==0){
    console.log("Number is even..")
}
else{
    console.log("Number is odd..")
}

console.log("find largest of three numbers usinng nested if else")
let a=10, b=20, c=30;
console.log("Largest of three number is using Ternary Operator : ",a>b && a>c? a:b>c ? b:c)

if(a>b && a>c){
    console.log("a is a largest number.." );
}else if(b>a && b>c){
    console.log("b is a largest number..")
}
else{
    console.log("c is largest number..")
}