let d=new Date();

console.log(d) //2025-03-23T11:44:40.969Z
console.log(d.getDate()) // 1-31 current Date only in digit
console.log(d.getMonth()+1) // 0-11 return current month start from 0
console.log(d.getFullYear()) // 2025
console.log(d.getDate(),':', d.getMonth()+1,':', d.getFullYear()) // 23 : 2 : 2025
console.log(d.getHours(),':',d.getMinutes(),':',d.getSeconds()); // 18 : 21 : 42