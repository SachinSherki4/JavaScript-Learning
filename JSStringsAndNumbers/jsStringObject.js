let s="Sachin";

console.log(s.charAt(2))  // c
console.log(s.concat(" Sherki").concat(" India")); // Sachin Sherki India
console.log(s) // Sachin
console.log(s.replace("c","C")) // SaChin
console.log(s.substring(0,2)) // Sa substring(start, end-1)
console.log(s.toLowerCase()) //sachin
console.log(s.toUpperCase()) //SACHIN

let ss="Welcome! Lets learn JavaScripts together.";
console.log(ss.split(" ")); // [ 'Welcome!', 'Lets', 'learn', 'JavaScripts', 'together.' ]

let space="  Welcome   ";
console.log(space.trim()) // Welcome