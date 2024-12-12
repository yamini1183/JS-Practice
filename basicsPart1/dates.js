let myDate = new Date()
console.log(myDate); //2024-12-11T17:12:21.371Z

console.log(myDate.toString()); //Wed Dec 11 2024 22:43:53 GMT+0530 (India Standard Time)

console.log(myDate.toDateString());//Wed Dec 11 2024
console.log(myDate.toLocaleString()); //11/12/2024, 10:46:29 pm

console.log(typeof myDate); //object

let myCreatedDate = new Date(2024,0,11) // 0 is for Jan and 11 for Dec
console.log(myCreatedDate.toDateString()); //Thu Jan 11 2024

let anotherDate = new Date(2024,0,11,5,3)
console.log(anotherDate.toLocaleString()); //  11/1/2024, 5:03:00 am

let otherDate = new Date("2024-01-11") // or "11-01-2024"
console.log(otherDate.toLocaleString()); //  11/1/2024, 5:30:00 am

let myTimeStamp = Date.now()
console.log(Math.floor(myTimeStamp/1000)); // in seconds


// more customization
myDate.toLocaleString('default', {
     weekday:"long",
} )