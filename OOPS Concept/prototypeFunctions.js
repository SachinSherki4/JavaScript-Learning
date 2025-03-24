
function student(){
    this.name="John";
    this.gender=28;
}

student.prototype.age=28; // now age is added  to method student()

stu1=new student();
console.log(stu1.name); //John
console.log(stu1.gender); //28
// want  to add new variable to functions
//stu1.age=28;
console.log(stu1.age); //28 

stu2=new student();
console.log(stu2.name, stu2.gender,stu2.age); //John 28 undefined - here age added by obj stu1 not accisible to stu2