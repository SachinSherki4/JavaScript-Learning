//Method Overriding: modify the method implementation of parent class method in child class.
// Method Overriding possible only with inheritance.

class Bank{
    roi(){
        return 0;
    }
}

class AXIS extends Bank{
    roi(){
        return 10.5;
    }
}

class SBI extends Bank{
    roi(){
        return 12.5;
    }
}

let sbi=new SBI();
console.log(sbi.roi()); // 12.5

let axis=new AXIS();
console.log(axis.roi()); //10.5

