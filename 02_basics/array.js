//Array
const myarray=[0,1,2,3,4,5,6]
const myheros=["shaktiman","krrish"]

//Array methods

myarray.push(7)
console.log(myarray)

myarray.unshift(9) //moves the 0th element to next position and adds 9 to beginning
console.log(myarray); 
myarray.shift(); //removes the first element from the array
console.log(myarray);

const newArr= myarray.join() //adds in form of string therefore will contain 0,1,2,3,4,5,6,7
console.log(myarray)
console.log(typeof newArr) //string

//slice,splice
console.log("A",myarray)
const myn1 = myarray.slice(1,3) //adds 1,2 to myn1
console.log("\n",myn1)
console.log("B",myarray); 

const myn2= myarray.splice(1,3) //adds 1,2,3 to myn2 and removes it from myarray
console.log("\n",myn2)
console.log("C",myarray);

//using slice doesnt change the orginal array and the range is not included
//whereas in splice it removes the specified elements from the original array 
//and it includes the range in the new array 


const marvel_heros=["thor","Ironman","spiderman"]
const dc_heros=["superman","flash","batman"]
marvel_heros.push(dc_heros) //adds dc_heros as 2nd dimension array to marvel_heros
console.log(marvel_heros)
console.log(marvel_heros[3][1]) //prints flash

const all_new_heros=[...marvel_heros, ...dc_heros] //spreads all the elements of the array and adds individual element 
// to the all_new_heros from the marvel_heros and dc_heros
console.log(all_new_heros)

let another_arr=[1,2,3,[4,5,6],7,[6,7,[4,5]]] //a multi dimensional array
let usable_another_arr= another_arr.flat(Infinity)
console.log("\n",usable_another_arr)

console.log(Array.isArray("Ansh Trivedi")) //returns false as Ansh Trivedi is a String 
console.log(Array.from("Ansh Trivedi")) //Converts Ansh Trivedi to an array of individual characters 

let score1= 100
let score2=200
let score3 = 300
console.log("\n",Array.of(score1,score2,score3)) //adds 100,200,300 to array by the of method 
