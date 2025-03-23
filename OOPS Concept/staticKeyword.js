
// Static : Memory allocated only once, and can use across class anf object - save  memory.

class Test{

    static a="Satic Variable";
    b="Non Static variable";
    static m1(){
        console.log("This is Static Method...")
    }
    m2(){
        console.log("This is Non-Static Method..")
    }
}

console.log(Test.a)  //Satic Variable
//console.log(Test.b)  // undefined
Test.m1()  // This is Static Method...
//Test.m2()  // TypeError: Test.m2 is not a function
// We cant access non-static variable and non-static methods using class name.
// To access, we need object

let t=new Test();
console.log(t.b);  // Non Static variable
t.m2();  // This is Non-Static Method..