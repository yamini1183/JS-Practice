const user = {
    username: "yamini",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        //console.log(this);
            //yamini, welcome to website
            // {
            //     username: 'yamini',
            //     price: 999,
            //     welcomeMessage: [Function: welcomeMessage]
            //   }
            // yadav, welcome to website
            //   {
            //     username: 'yadav',
            //     price: 999,
            //     welcomeMessage: [Function: welcomeMessage]
            //   }
    }
}
console.log(this); // {}

user.welcomeMessage() //yamini, welcome to website
user.username = "yadav"
user.welcomeMessage() // yadav, welcome to website

// function chai() {
//     let username = "yamini"
//     console.log(this.username); 
// }
// chai() // undefined
//"this" works only on objects not on functions



//ARROW FUNCTIONS
const chai = () => {
    
}




//node arrowFunctions.js