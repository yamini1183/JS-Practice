// let a = 10
// const b = 20
// var c = 30

// console.log(a); //10
// console.log(b); //20
// console.log(c); //30

// var c = 300 //Global Scope

// if(true){
//     let a = 10
//     const b = 20
//     var c = 30
// }  //Block Scope

//console.log(a); // ReferenceError: a is not defined
//console.log(b); // ReferenceError: b is not defined
//console.log(c); //30

let a = 300 //Global Scope

if(true){
    let a = 10
    console.log("Inner:", a); // Inner: 10
    
} // Block Scope

console.log(a); //300

function one() {
    const username = "yamini"

    function two() {
        const website = "youtube"
        console.log(username);
        
    }
    //console.log(website); //Error
    
    two()
}
//two() //  ReferenceError: two is not defined
one() //yamini


//+++++++++++++++++++++++++++++ Interesting +++++++++++++++++++++++++++++++++
//Hoisting

console.log(addone(5)) //6
function addone(num) {
    return num+1
}

addtwo(5) // ReferenceError: Cannot access 'addTwo' before initialization
const addtwo = function(num) {
    return num+2
}
