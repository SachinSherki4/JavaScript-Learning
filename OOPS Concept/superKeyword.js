//super keyword: use to refer parent class parameters, when calling parent class constructor, use super()

class Animal{
    constructor(color){
        this.color=color;
    }

    printColor(){
        console.log("Color : ",this.color);
    }
}

class Dog extends Animal{
    constructor(color,food){
        super(color);
        this.food=food;
    }
    eating(){
        console.log("Food : ",this.food);
    }
    display(){
        this.printColor(); //Color :  Black 
        this.eating() //Food :  Bread
    }
}

d=new Dog("Black","Bread");
d.display(); //Color :  Black //Food :  Bread