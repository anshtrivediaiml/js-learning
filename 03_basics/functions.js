 function adding(a,b) {
console.log("Addition of these two will give: ",a+b)    
 }

let a=10
let b=20
 adding(a,b)
adding() //Will not give error but give NaN

function calculateCart(...num1)  // ... is termed as rest operator and spread operator and using it we can pass any number of values tothe functions

{
    return num1
}

console.log(calculateCart(100)) //only 100 is passed
console.log(calculateCart(100,200)) //100 and 200 is passed
console.log(calculateCart(100,200,300)) // 100,200 and 300 is passed

const user={
    username:"ansh119",
    email:"anshtrivedi85@gmail.com"
}

function handleObject(randomobj) //passing object as input
{
    console.log(`Username is ${randomobj.username} and email is ${randomobj.email}`)

}

handleObject(user)

const myArray=[200,300,400,500]
function returnSecondValue(getArray) //passing array as input
{
    return getArray[1]
}

const arrayvalue=returnSecondValue(myArray)



/*   this 
    keyword  */

    const user1={
        username:"ansh",
        phone: 91919563,
        welcomemsg : function(){
            console.log(`${this.username} , welcome to the code`)
            console.log(this);
        }
    }

user1.welcomemsg()
console.log(this); //returns {} empty

function testing()
{
    let user = "anshtrivedi"
    console.log(this.user); //prints undefined as this cannot be used here 
}
testing()


/* *****
   Arrow 
   Functions
   *****  */
 
const chai = ()=>{
    console.log("Hello World")
}

const addTwonum= (num1,num2)=>
{
    return num1+num2;
}

//Or it can be also written in one line as 
//const addTwonum =(num1,num2)=> (num1+num2) //it follows implicit return
console.log(addTwonum(5,2)); //If semicolon will not be inserted here then the IIFE 
//function will not be executed and interpreter will give an error



/* Immediately 
Invoked 
Function 
Expression ()
*/

(function coffee(){
    console.log("Te Coffee Kem mangai");
})();    //the function cofee is immediately invoked 
 //In the upper method instead of calling the function as coffee() we wrapped 
 // the whole function defination in parenthesis and then added 1 more parenthesis
 //in front so it can be called ,this is IIFE
  //IIFE is used in javascript to protect from any inconvenience caused bcoz of 
  //global variable


  //IIFE Arrow function
  ( ()=>{
    console.log(`testing IIFE arrow function successful`)
  })();

