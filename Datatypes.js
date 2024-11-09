let name = "Yamini"    //string
let age = 21     //number
let isMarried = false    //boolean 
let state;    //undefined

//null => standalone value
// symbol => unique

console.log(typeof undefined); // undefined
const id = Symbol('123')       //Symbol
const anotherId = Symbol('123')  //Symbol

console.log(id===anotherId); //false

console.log(typeof null); // object


// Primitive 

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt


// Reference (Non Primitive)

// Array, Objects, Functions

const heros = ["IronMan", "Thor", "Loki", "Hulk"]  //Array

let myObj = {
    name: "Yamini",
    age: 21,
}  //object

const myfunction = function(){
     console.log("Hello World!");
     
}  //function

 console.log(typeof heros); //object
 console.log(typeof myfunction);  //function or object function
 console.log(typeof myObj);  //object



 // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubeName = "yamini1183";

let anotherName = myYoutubeName

console.log(anotherName); //yamini1183

anotherName = "yamini"

console.log(anotherName);  //yamini
console.log(myYoutubeName); //yamini1183

let user ={
    email: "user123@gmail.com",
    upi: "user@ybl"
}

let user2 = user 

user2.email = "user@gmail.com";

console.log(user.email); //user@gmail.com
console.log(user2.email); //user@gmail.com
