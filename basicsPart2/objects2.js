// Declaring Objects

//const NewUser = new Object() //singleton
// or 
const NewUser = {}     // Non Singleton

NewUser.id = "123abc"
NewUser.name = "Yamini"
NewUser.isLoggedIn = false

console.log(NewUser); //{ id: '123abc', name: 'Yamini', isLoggedIn: false }

console.log(Object.keys(NewUser)); //[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(NewUser));  // [ '123abc', 'Yamini', false ]
console.log(Object.entries(NewUser)); // [ [ 'id', '123abc' ], [ 'name', 'Yamini' ], [ 'isLoggedIn', false ] ]  

console.log(NewUser.hasOwnProperty('isLoggedIn')); //true
console.log(NewUser.hasOwnProperty('isLogged'));  //false


const regularUser = {
    email: "user@gmail.com",
    fullName: {
        userfullname:{
            firstname: "Yamini",
            lastname: "Yadav"
        }
    }
}

console.log(regularUser.fullName.userfullname.firstname); //Yamini


const obj1 = { 1: "a", 2: "b"}
const obj2 = { 3: "a", 4: "b"}

// const obj3 = Object.assign({}, obj1 , obj2) //empty parenthesis act as a target (it stores all the combined data) and other objects as a source, if we do not include the empty object in the beginning all the values will be stored in first object i.e obj1

// Preferred Method

const obj3 = {...obj1, ...obj2}


console.log(obj3); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


console.log(Object.keys(obj3)); //[ '1', '2', '3', '4' ]
console.log(Object.values(obj3)); //[ 'a', 'b', 'a', 'b' ]
console.log(Object.entries(obj3)); // [ [ '1', 'a' ], [ '2', 'b' ], [ '3', 'a' ], [ '4', 'b' ] ]



const users = [
    {
       id: 1,
       email: "y@gmail.com",
    },
    {
       id: 2,
       email: "a@gmail.com"
    },
    {
       id: 3,
       email: "b@gmail.com"
    }
]

console.log(users[1].email); //a@gmail.com

// the above code is used for getting different users info and fetching information from it 




//Destructuring

const course = {
    coursename: "js",
    price: "999",
    instructor: "HC"
}

// course.instructor

// const {instructor} = course
// console.log(instructor); // HC

// you can even destructure the instructor by below syntax

const {instructor: courseInstructor} = course

console.log(courseInstructor); //HC
