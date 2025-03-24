// Inheritance: func where child class can access and implement all the properlties and behaviour of parent class.
//Types: 
//1. single inheritance: child class inherit parent class
//2. Multi-level: child class inherit parent class which itself inherit  by another class.
//3. Hierachical: one parent class innherited by multiple child class.
//4. multiple inheritance: one class inherit multiple parent class. JS not support multiple inheritance.

class A{

    a=100;
    display(){
        console.log(this.a);    }

}

class B extends A{
    b=200;
    show(){
        console.log(this.b);
    }
}

let bobj=new B();
console.log(bobj.a); //100
console.log(bobj.display()); //100
console.log(bobj.b);  //200
console.log(bobj.show()) //200