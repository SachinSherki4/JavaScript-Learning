console.log("Defining and Initializing of Arrays")

let cars=["BMW","Tata","Suzuki"];
console.log(cars)
let cars2=new Array("BMW","Tata","Suzuki");
console.log(cars2)

console.log("Access Array ELements using index")
// Array index always start from Zero
console.log(cars[1]) // Tata

console.log("Update elements in Arrays")
cars[2]="Mercedis";
console.log(cars); //[ 'BMW', 'Tata', 'Mercedis' ]

console.log("Can store heteroginious Data in Arrays")
let bio=["Sachin",28,"male",true,242.33]  // can hold all data types
console.log(bio)

console.log("Array can hold objects")
let person1={
    name : "John",
    age : 29
}
let person2={
    name : "Jack",
    age : 31
}
let persons=[person1, person2]
console.log(persons) // both objects data
console.log(persons[0]) // only first element

console.log("Lenth of an Array")
console.log(bio.length) // 5

console.log("Reading data from Array")
let fruits=["Banana","Papaya","Mango","Beatroot"];
for(i=0; i<fruits.length;i++){
    console.log(fruits[i])
}

console.log("Read Array element using for of loop")
for(ele of fruits){
    console.log(ele)
}

console.log("Recognise Variable is Array or not")
console.log(typeof fruits) //object
console.log(Array.isArray(fruits)) // true


