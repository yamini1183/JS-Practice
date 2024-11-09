const name = "Yamini"
const repoCount = 21

// console.log(name+ repoCount+ " Value" );
 //Above syntax is pretty outdated

 //Mordern way

 console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
 
// String declaration in another way

const gameName = new String('TheYYGirl')

console.log(gameName[0]); //T
console.log(gameName.__proto__); // {}

console.log(gameName.length); //9
console.log(gameName.toUpperCase()); //THEYYGIRL
console.log(gameName.charAt(4)); //Y
console.log(gameName.indexOf('e')); //2

const newString = gameName.substring(0,4);
console.log(newString); //TheY    not TheYY because the 4rth index is not included

const anotherString = gameName.slice(0,-2)  //slice method can take negative values too but it is not possible in sustring method
console.log(anotherString); // TheYYGi

const newString1 = "   yamini   "
console.log(newString1);
console.log(newString1.trim()); // Removes the leading and trailing white space and line terminator characters from a string.

const url = "https://google.com/new%20images"

console.log(url.replace('%20', '-')) //https://google.com/new-images
console.log(url.includes('.com')); //true

const newString2 = "yamini-yadav-cse"
console.log(newString2.split('-')); // [ 'yamini', 'yadav', 'cse' ]

// node strings.js