function sayMyName() {
    console.log("Yamini");
    console.log("Yadav");
}

sayMyName() // Yamini Yadav

                       // Parameters
                       //      |  
// function AddTwoNumbers(number1, number2) {
//     console.log(number1+number2);
    
// }

//AddTwoNumbers(3,4) //7
           //  ^
           //  |
         // arguments

// const result = AddTwoNumbers(3,4)    //7
// console.log(result); // undefined
 
 function AddTwoNumbers(number1, number2) {
    // let result = number1 + number2
    // return result
    return number1 + number2 
}

const result = AddTwoNumbers(3,4)  
 console.log(result); //7


function loginUserMessage(username){
    if(!username){
        console.log("Please enter a username");
        return
    }
      return `${username} just logged in`
}

console.log(loginUserMessage("yamini")) //yamini just logged in
console.log(loginUserMessage()) //Please enter a username
                                //undefined


function calculateCartPrice(...num1){
    return num1
}                                

console.log(calculateCartPrice(200,300,400)); //[ 200, 300, 400 ]

// For objects

const user = {
    username: "yamini",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

handleObject(user) //Username is yamini and price is 199

handleObject({
    username: "yadav",
    price: "299"
}) // Username is yadav and price is 299


//For Arrays

const Array = [100,200,400,600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(Array)); // 200
console.log(returnSecondValue([200,400,600,800])); //400
