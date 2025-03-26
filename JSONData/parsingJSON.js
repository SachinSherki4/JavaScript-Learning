let data=  `{
    "name": "John Doe",
    "age": 30,
    "email": "johndoe@example.com",
    "address": {
      "street": "123 Main St",
      "city": "Anytown",
      "state": "NY",
      "zipcode": "12345"
    },
    "phone_numbers": [
      "+1-555-1234",
      "+1-555-5678"
    ],
    "is_active": true
}`;

let json={"name": "Jane Doe", "address": {"city": "New York", "state": "NY"}};

let json_parse=JSON.parse(data) //
console.log(data['phone_numbers']); //undefined - directly accessing string data 
console.log(json_parse['phone_numbers'][0]) //+1-555-1234
console.log(json_parse.address.city); //Anytown

// accessing directly json data
console.log(json.name) // Jane Doe
console.log(json.address.state); //NY

console.log("Converting JS Object to Json String")

const user = {
    name: "Bob",
    role: "QA Engineer"
};
console.log(user);  // json object { name: 'Bob', role: 'QA Engineer' }
const jsonString=JSON.stringify(user); 
console.log(jsonString); // JSON String {"name":"Bob","role":"QA Engineer"}


console.log("Check Json is valid or not");

function isValidJson(jsonString){
    try{
        JSON.parse(jsonString);
        return true
    }
    catch (error){
        return false;
    }
}
console.log(isValidJson('{"name": "Alice"}')); //true
console.log(isValidJson({"name": "Alice"})); // false - already JSON Object

console.log("adding new data to JSON object");

let j = `{
    "name": "John Doe",
    "age": 30,
    "email": "johndoe@example.com",
    "address": {
      "street": "123 Main St",
      "city": "Anytown",
      "state": "NY",
      "zipcode": "12345"
    },
    "phone_numbers": [
      "+1-555-1234",
      "+1-555-5678"
    ],
    "is_active": true
}`;

j.user="Sachin";
let js=JSON.parse(j);
console.log(typeof(j)); // string
console.log(j);
console.log(typeof(js)); //object

// adding new data to json object
js.user="Michal"; // new key-value
js.phone_numbers.push("+1-8765-765"); // adding data in Array element
js.name="Jack" // updating existing data
delete js.age ; // deleting key-value
console.log(js);


// merging two objects
let obj1 = { name: "Alice", age: 28 };
let obj2 = { country: "USA", profession: "QA Engineer" };
let merge_obj=Object.assign({},obj1,obj2);
console.log(merge_obj);


// checking key present in JSON object or not

//Syntax : "Key" in jsonData

if ("name" in obj1){ //True
  console.log("True")
}
else{
  console.log("False");
}

console.log("lopping through JSON Data")

for (let key in js){
  console.log(`${key} : ${js[key]}`)
}





