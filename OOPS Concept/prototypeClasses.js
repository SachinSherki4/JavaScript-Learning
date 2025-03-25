class Student{
    constructor(name,section){
        this.name=name;
        this.section=section;
    }
    display(){
        console.log("Name : ",this.name,"Section",this.section);
    }
}

Student.prototype.age=28; // adding age at class level at run time using prototype.
s1=new Student("John","A");
s1.display(); //Name :  John Section A
s1.age=28;
console.log(s1.age); //28

s2=new Student("Cody","B");
console.log(s2.name,s2.section,s2.age); // Cody B 28
