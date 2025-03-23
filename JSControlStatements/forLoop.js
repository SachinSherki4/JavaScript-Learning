/*
For Loop : if condition is known and want to iterate the loop till condition reach we use for loop.
Syntax: 
for (initialization; condition; inc/dec){
    statement;
}
*/

console.log("Print Value from 1 to 10 using for loop..")
for (i=1; i<=10; i++){
    console.log(i);
}

console.log("Print Even number from 1 to 20")
for(i=2; i<=20;i+=2){
    // if(i%2==0){
    //     console.log(i); i++
    // }
    console.log(i)
}

console.log("Print number in reverse from 10 to 1")
for(i=10;i>0;i--){
    console.log(i);
}