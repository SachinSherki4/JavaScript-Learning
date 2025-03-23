
/*
Functions: block of statement which will perform certains specific task when it invoke (call)
Syntax: 
 function name(par1, par2, par3){
    statement to be executed;
 }

 Function Invocations: will execute when something envoke (call) it.
 1. When an event occure (when user click an button).
 2. When invoke from JS code
 3. Automatically (self invoked).

*/

function add(a,b){
    console.log("Addition of a and b is : ",a+b)
}
add(19,29);

function sub(a,b){
    return (a-b);
}
let res=sub(6,3)
console.log(res)

function greetings(){
    console.log("Hey! Good Morning..")
}
greetings()
let r=greetings()
console.log(r)
console.log(greetings())



