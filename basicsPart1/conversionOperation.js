let age = "30"   //string

console.log(typeof age);

let ageInNumber = Number(age)   //number

console.log(typeof ageInNumber); //number
console.log(ageInNumber); //30




let temp ="123abc"

let tempInNumber= Number(temp)

console.log(typeof tempInNumber); //number
console.log(tempInNumber)   // output NaN as it is not number




let value = null

let valueInNuber= Number(value)

console.log(typeof value);  //object
console.log(valueInNuber);   //0

// if it is boolean value the it gives 1 for true and 0 for false
// for undefined value it outputs NaN 


let isMarried = 1

let booleanIsMarried = Boolean(isMarried)

console.log(booleanIsMarried);  //true for 1 and false for 0 
 // false for "" empty string 
 // true for "yamini"

let value2 = 33

console.log(typeof value2);

let stringValue2= String(value2)
console.log(stringValue2);
console.log(typeof stringValue2);

console.log(+true) // returns 1 but it is bad practice to write it in such a way


let num1, num2, num3

num1 = num2 = num3 = 2 + 2  // declaring same values to the variables 

let Counter = 100
++Counter;
console.log(Counter);