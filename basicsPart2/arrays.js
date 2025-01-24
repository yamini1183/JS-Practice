const myArr = [1,2,3,4,5]
console.log(myArr[2]); //3

const heroes = ["ironMan", "Thor","loki"]

const myArr1 = new Array(1,2,3,4)

// ARRAY METHODS

myArr.push(6) // [ 1, 2, 3, 4, 5, 6 ]

myArr.push(7) // [ 1, 2, 3, 4, 5, 6 , 7]
myArr.pop()   // [ 1, 2, 3, 4, 5, 6]

myArr.unshift(0) // [ 0, 1, 2, 3, 4, 5, 6]
myArr.shift() // [ 1, 2, 3, 4, 5, 6]

console.log(myArr.includes(0)); //false
console.log(myArr.indexOf(4)); //3

//SLICE AND SPLICE

const m = myArr.slice(1,3)
console.log(m); // [ 2, 3]
console.log(myArr); //[ 1, 2, 3, 4, 5, 6]


const n = myArr.splice(1,3)
console.log(n); //[ 2, 3, 4 ]
console.log(myArr); //[ 1, 5, 6 ]


