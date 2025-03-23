class Student{

    // initialise data to the class with help of method
    // setData(name, sid, grade){
    //     this.name=name;
    //     this.sid=sid;
    //     this.grade=grade
    // }

    // constructor will call at time of object creation and initialize class values
    constructor(name, sid, grade){
        this.name=name;
        this.sid=sid;
        this.grade=grade
    }

    // display all class data
    display(){
        console.log("Name : ",this.name, "SID : ",this.sid,"Grade : ",this.grade);
    }
}

let stu=new Student("John",22,"A");
//stu.display();  //Name :  undefined SID :  undefined Grade :  undefined
//stu.setData("John",22,"A");
stu.display(); // Name :  John SID :  22 Grade :  A

let stu1=new Student("Jack",101,"C");
stu1.display();   //Name :  Jack SID :  101 Grade :  C
let stu2=new Student("Cena",202,"A");
stu2.display();  //Name :  Cena SID :  202 Grade :  A
let stu3=new Student("Patrick",111,"B");
stu3.display();  //Name :  Patrick SID :  111 Grade :  B