// console.log(5>6)
// console.log(5>=6)
// console.log(5<6)
// console.log(5==6)
// console.log(5!=6)


// console.log("2">1);  //true
// console.log("02">1);  //true


// AVOID BELOW  COMPARISIONS

console.log(null > 0);   //false
console.log(null == 0);    //false
console.log(null >= 0);    //true
// Comparision <, >, <=, >= works differently than equality check == because Comparisons convr null to a number, treating it as 0

// console.log(undefined > 0);   //false
// console.log(undefined == 0);    //false
// console.log(undefined >= 0);    //false

console.log("2"==2); //true
console.log("2"===2); //false

