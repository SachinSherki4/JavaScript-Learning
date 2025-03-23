
// Encapsulation: Binding data(variable) into a functions(methods) acting on it into a single unit,
//  so that external entity can not directly access that data

class Student{

    constructor(){
        let name, marks;
    }

    getName(){
        return this.name;
    }
    setName(name){
        this.name=name;
    }
    getMarks(){
        return this.marks;
    }
    setMarks(marks){
        this.marks=marks;
    }
}

let s=new Student();
s.setName("John");
s.setMarks(91);
console.log(s.getName()); //John
console.log(s.getMarks()); //91