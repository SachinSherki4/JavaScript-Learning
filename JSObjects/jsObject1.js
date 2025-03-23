
console.log("****Define Object using let keyword****")

let person={
    firstName : "Sachin",
    lastName : "Sherki",
    age : 28,
    location : "India"
}

console.log("****can access object properties****")
console.log(person["firstName"]) //Sachin
console.log(person.lastName) // Sherki

console.log("****Add new property to object****")
person.profession="Software Developer Engineer in Test";
console.log(person.profession)

console.log("****Update existing property of Object****")
person.age=26;
console.log(person.age) //26

console.log("****Delete property from object****")
console.log(person.profession) //Software Developer Engineer in Test
delete person.profession
console.log(person.profession) //undefined

console.log("****print all properties of object using for in loop***")
for (let x in person){
    //console.log(x) prinnt only property name not value
    console.log(x, " : ",person[x])
}