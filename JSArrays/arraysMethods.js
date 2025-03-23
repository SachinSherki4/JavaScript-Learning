console.log("Array Methods :  toString(), join()")

let fruits=["Banana","Papaya","Mango","Beatroot"];
console.log(fruits.toString()) // Banana,Papaya,Mango,Beatroot
console.log(fruits.join("-")) // Banana-Papaya-Mango-Beatroot

console.log(fruits.pop()) // Beatroot
console.log(fruits.toString()) // Banana,Papaya,Mango

console.log("Add new element using push()")
console.log(fruits.push("Grapes")) // 5 add new element and return lenth of arrays

console.log("shift() method to remove and return first element and rearrange rest element")
let fruit=["Banana","Papaya","Mango","Beatroot"];
console.log(fruit.shift()) // Banana
console.log(fruit) // [ 'Papaya', 'Mango', 'Beatroot' ]

console.log("unshift() method add new element in begening of Array")
console.log(fruit.unshift("Lemon")) // 4
console.log(fruit)  // [ 'Lemon', 'Papaya', 'Mango', 'Beatroot' ]

console.log("delete method to delete element from Array")
console.log(delete fruit[1]) //true
console.log(fruit) // [ 'Lemon', <1 empty item>, 'Mango', 'Beatroot' ]
console.log(delete fruit[1]) // //true
console.log(fruit)  // [ 'Lemon', <1 empty item>, 'Mango', 'Beatroot' ]


console.log(" concat() to join/merging of two arrays")
let arr1=[1,3,5,3];
let arr2=["John","Brock"];
console.log(arr1.concat(arr2)) // [ 1, 3, 5, 3, 'John', 'Brock' ]
let arr3=['x','y','z'];
console.log(arr1.concat(arr2,arr3)) // [ 1, 3, 5, 3, 'John', 'Brock', 'x', 'y', 'z' ]

console.log("slice() of Arrays")
let s=[ 'Lemon', 'Papaya', 'Mango', 'Beatroot', "Almond"];
console.log(s.slice(1)) //[ 'Papaya', 'Mango', 'Beatroot', 'Almond' ]
console.log(s.slice(1,3)); // [ 'Papaya', 'Mango' ] [slice (start, end-1)]
console.log(s.slice(0,2))  // [ 'Lemon', 'Papaya' ]
console.log(s.slice(-1))  // [ 'Almond' ]
console.log(s.slice(0,-1))  // [ 'Lemon', 'Papaya', 'Mango', 'Beatroot' ] skipp last one
console.log(s.slice()) // [ 'Lemon', 'Papaya', 'Mango', 'Beatroot', 'Almond' ]

console.log("sort() method to sort element is ascending order.")
console.log(s.sort()) // [ 'Almond', 'Beatroot', 'Lemon', 'Mango', 'Papaya' ]
let num=[5,2,6,82,1];
console.log(num.sort()); // [ 1, 2, 5, 6, 82 ]
num.reverse(); // [ 82, 6, 5, 2, 1 ] = reverse original Array
console.log(num)
