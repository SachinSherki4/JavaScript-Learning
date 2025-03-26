
function createUser(name, age){
    return{
        name : name,
        age : age,
        greeting(){
            console.log(`Hello! My name is ${this.name} and age is ${this.age}`);
        }
    }
}

