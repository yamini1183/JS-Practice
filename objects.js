// Singleton - when constructor is used 
// Object.create
//Above in part2


const mySym = Symbol("keys")
// Object literals

const User = {
    name: "Yamini",
    "Full Name": "Yamini Yadav",
    [mySym]: "myKey",
    age: 21 , 
    location: "Prayagraj",
    email: 'yamini@gmail.com' ,
    isLoggedIn: false
}

// Two ways to access above elements
console.log(User.name); // correct it contains some limitations
    //You cannot access "Full Name" or Symbol using above method

console.log(User["name"]); //Yamini
console.log(User["Full Name"]);
console.log(User[mySym]);

// Changing values inside User (also two ways )

User.email = "yamini123@gmail.com"
User["age"] = 20

//Object.freeze(User)
//User.name = "Mango" // this change will not propagate to User due to freeze

console.log(User); // {
                    //     name: 'Yamini',
                    //     'Full Name': 'Yamini Yadav',
                    //     age: 20,
                    //     location: 'Prayagraj',
                    //     email: 'yamini123@gmail.com',
                    //     isLoggedIn: false,
                    //     [Symbol(keys)]: 'myKey'
                    //  }

User.greeting = function() {
    console.log("Hello User");
}

User.greeting2 = function(){
    console.log(`Hello, ${this.name}`);  
}

// console.log(User.greeting());  //return undefined too
// console.log(User.greeting2());  //return undefined too

User.greeting(); //Hello User
User.greeting2()  //Hello, Yamini
