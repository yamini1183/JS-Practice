let myDate = new Date()
console.log(myDate); //2024-12-11T17:12:21.371Z

console.log(myDate.toString()); //Wed Dec 11 2024 22:43:53 GMT+0530 (India Standard Time)

console.log(myDate.toDateString());//Wed Dec 11 2024
console.log(myDate.toLocaleString()); //11/12/2024, 10:46:29 pm

console.log(typeof myDate); //object

let myCreatedDate = new Date(2024,0,11) // 0 is for Jan and 11 for Dec
console.log(myCreatedDate.toDateString()); //Thu Jan 11 2024
