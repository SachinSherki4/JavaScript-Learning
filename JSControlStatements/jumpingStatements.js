 /* Jumping statements in JS are break and continue
    break : use to break the loop and jump out of current loop
            use within loops like for, while, do while, if


    continue: use to skipp the current iteration and jump to next iteration

 */

console.log("Break loop if found condition")
for(i=1; i<10; i++){
    if(i==5){
        console.log("Found Number : ",i);
        break;
    }
}

console.log("Skipp certain number and print remianing.")
for(i=1;i<10;i++){
    if(i==5 || i==3 || i==9)
        continue;
    
    console.log(i)
}