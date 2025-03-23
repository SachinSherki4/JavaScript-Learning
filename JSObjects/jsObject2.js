let employee={
    empName : "Scott",
    job : "Engineer",
    basicSal : 150000,
    bonus : function(){
        return ((this.basicSal *10)/100);
    }
};

console.log("Emplyee Basic salary is : ",employee.basicSal) //150000
console.log("Emplyee Bonus : ",employee.bonus()) //15000