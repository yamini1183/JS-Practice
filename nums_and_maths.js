const marks = 300
console.log(marks);


const score = new Number(100)
console.log(score);

console.log(score.toString());
console.log(score.toString().length);  //3
console.log(score.toFixed(2)); //100.00

const otherNumber = 23.8968

console.log(otherNumber.toPrecision(3)); //23.9

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); // 10,00,000


// ++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4)); //4
console.log(Math.round(4.6)); //5
console.log(Math.ceil(4.2)); //5
console.log(Math.floor(4.6)); //4
console.log(Math.min(5,2,7,9)); //2
console.log(Math.max(5,2,7,9)); //9

console.log(Math.random()); // any random value between 0 and 1
console.log((Math.random()*10)+1); //any random value between 1 and 10

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1)+min));


//node nums_and_maths.js