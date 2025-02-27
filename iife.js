// Immediately Invoked Function Expression (IIFE)
//()()
//Used to avoid pollution caused by global scope

//named iife
(function chai() {
    console.log(`DB CONNECTED`);
})();



( () =>{
    console.log(`DB CONNECTED TO`);
}
)();

(
    (name) =>{
        console.log(`DB CONNECTED TO ${name}`);
    }
)('yami')