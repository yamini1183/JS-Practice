const marvel_heros = ["Thor", "Loki","Spiderman","IronMan"]
const dc_heros = ["Deadpool", "Superman", "Batman", "Black Adam"]

//marvel_heros.push(dc_heros)

//console.log(marvel_heros); //[
                            //     'Thor',
                            //     'Loki',
                            //     'Spiderman',
                            //     'IronMan',
                            //     [ 'Deadpool', 'Superman', 'Batman', 'Black Adam' ]
                            //   ]


//console.log(marvel_heros[4][0]); //Deadpool

const all_heros = marvel_heros.concat(dc_heros)

console.log(all_heros); // [
                            //     'Thor',
                            //     'Loki',
                            //     'Spiderman',
                            //     'IronMan',
                            //     'Deadpool',
                            //     'Superman',
                            //     'Batman',
                            //     'Black Adam'
                            //   ]



//PREFFERED METHOD (Spread method)

const all_new_heros = [...marvel_heros, ...dc_heros]

console.log(all_new_heros);  // [
                            //     'Thor',
                            //     'Loki',
                            //     'Spiderman',
                            //     'IronMan',
                            //     'Deadpool',
                            //     'Superman',
                            //     'Batman',
                            //     'Black Adam'
                            //   ]



const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity) // or .flat(3) for this case

console.log(real_another_array);  //[
                                //     1, 2, 3, 4, 5,
                                //     6, 7, 6, 7, 4,
                                //     5
                                //   ]

 // Convert the values in array 
 console.log(Array.from("Yamini")); //[ 'Y', 'a', 'm', 'i', 'n', 'i' ]
 
let score1 =100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //[ 100, 200, 300 ]
